import { useKnowledgeItems } from "@/hooks/use-knowledge";
import { RetroCard } from "@/components/RetroCard";
import { Database, Loader2, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function KnowledgeVault() {
  const { data: items, isLoading } = useKnowledgeItems();
  const [search, setSearch] = useState("");

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const filteredItems = items?.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="border-b-4 border-double border-primary/20 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-glow">KNOWLEDGE VAULT</h1>
        <p className="font-serif text-muted-foreground mt-2">Here are some resources that you can use to learn more about computer science</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search database..." 
            className="pl-9 font-mono bg-background border-2 border-border focus:border-primary"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            data-testid="input-search"
          />
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
  return (
    <RetroCard title={`REF-${item.id.toString().padStart(4, '0')}`} className="h-full flex flex-col">
      <h3 className="font-display text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
      <p className="font-serif text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
        {item.description}
      </p>
      
      <div className="pt-4 border-t border-border mt-auto">
        <Button 
          variant="outline" 
          className="w-full font-mono text-xs border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"
          data-testid={`button-access-data-${item.id}`}
          onClick={() => item.link && window.open(item.link, '_blank')}
        >
          ACCESS DATA
        </Button>
      </div>
    </RetroCard>
  );
}

