import { useKnowledgeItems, useCreateKnowledgeItem } from "@/hooks/use-knowledge";
import { RetroCard } from "@/components/RetroCard";
import { Book, Code, Database, FileText, Globe, Loader2, Plus, Search, Tag } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertKnowledgeItemSchema, type InsertKnowledgeItem } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion, AnimatePresence } from "framer-motion";

export default function KnowledgeVault() {
  const { data: items, isLoading } = useKnowledgeItems();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const allCategories = Array.from(new Set(items?.map(i => i.category).filter(Boolean) as string[]));
  
  const filteredItems = items?.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4 border-b-4 border-double border-primary/20 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-glow">KNOWLEDGE VAULT</h1>
          <p className="font-mono text-sm text-muted-foreground mt-2">// ARCHIVED LEARNING MATERIALS</p>
        </div>
        <AddKnowledgeDialog />
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 bg-muted/30 p-4 rounded-sm border border-border">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search database..." 
            className="pl-9 font-mono bg-background"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
          <Button 
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className="font-mono text-xs whitespace-nowrap"
          >
            ALL
          </Button>
          {allCategories.map(cat => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(cat)}
              className="font-mono text-xs whitespace-nowrap"
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredItems?.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <KnowledgeCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
        
        {filteredItems?.length === 0 && (
          <div className="col-span-full py-20 text-center border-2 border-dashed border-border rounded-lg bg-muted/10">
            <Database className="w-12 h-12 mx-auto text-muted-foreground/50 mb-4" />
            <p className="font-mono text-muted-foreground">NO RECORDS FOUND IN DATABASE.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function KnowledgeCard({ item }: { item: any }) {
  const Icon = getIconForSource(item.source);

  return (
    <RetroCard title={`REF-${item.id.toString().padStart(4, '0')}`} className="h-full flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-primary/10 rounded text-primary">
          <Icon className="w-6 h-6" />
        </div>
        {item.category && (
          <span className="px-2 py-1 text-xs font-mono border border-primary/30 text-primary/80 rounded bg-primary/5">
            {item.category.toUpperCase()}
          </span>
        )}
      </div>
      
      <h3 className="font-display text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
      <p className="font-serif text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
        {item.description}
      </p>
      
      <div className="pt-4 border-t border-border mt-auto flex justify-between items-center text-xs font-mono text-muted-foreground">
        <span className="flex items-center gap-1">
          <Tag className="w-3 h-3" />
          {item.source}
        </span>
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener" className="text-primary hover:underline hover:text-accent font-bold">
            ACCESS_DATA &rarr;
          </a>
        )}
      </div>
    </RetroCard>
  );
}

function getIconForSource(source: string) {
  const s = source.toLowerCase();
  if (s.includes("book")) return Book;
  if (s.includes("code") || s.includes("github")) return Code;
  if (s.includes("web") || s.includes("blog")) return Globe;
  return FileText;
}

function AddKnowledgeDialog() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const createMutation = useCreateKnowledgeItem();
  
  const form = useForm<InsertKnowledgeItem>({
    resolver: zodResolver(insertKnowledgeItemSchema),
    defaultValues: {
      title: "",
      description: "",
      source: "",
      category: "",
      link: ""
    }
  });

  const onSubmit = (data: InsertKnowledgeItem) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Success", description: "Item archived successfully" });
        form.reset();
        setOpen(false);
      },
      onError: () => {
        toast({ title: "Error", description: "Failed to archive item", variant: "destructive" });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="font-mono bg-primary text-primary-foreground hover:bg-primary/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:translate-y-0.5 hover:shadow-none transition-all">
          <Plus className="w-4 h-4 mr-2" />
          ADD_ENTRY
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md font-mono border-4 border-double border-primary/40 bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-primary">New Knowledge Entry</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="font-serif" placeholder="React Hooks Mastery" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="source"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Source Type</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Book / Course" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} placeholder="Frontend" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Summary</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="font-serif" placeholder="Key concepts learned..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reference URL (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} placeholder="https://..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground font-bold"
              disabled={createMutation.isPending}
            >
              {createMutation.isPending ? "ARCHIVING..." : "SAVE TO VAULT"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
