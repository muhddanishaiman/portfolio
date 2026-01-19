import { useLearningNodes, useCreateLearningNode } from "@/hooks/use-learning-path";
import { Loader2, Plus, Flag, GraduationCap, Briefcase, Code, Circle } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLearningNodeSchema, type InsertLearningNode } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export default function LearningPath() {
  const { data: nodes, isLoading } = useLearningNodes();

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Sort nodes by 'order'
  const sortedNodes = [...(nodes || [])].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-8 pb-20">
      <div className="flex justify-between items-center border-b-4 border-double border-primary/20 pb-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-glow">LEARNING PATH</h1>
          <p className="font-mono text-sm text-muted-foreground mt-2">// SKILL ACQUISITION TIMELINE</p>
        </div>
        <AddNodeDialog nextOrder={sortedNodes.length + 1} />
      </div>

      <div className="relative max-w-3xl mx-auto pl-8 md:pl-0">
        {/* Central Vertical Line (hidden on mobile, visible on md+) */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 to-transparent transform md:-translate-x-1/2" />

        <div className="space-y-12 relative">
          {sortedNodes.length === 0 && (
            <div className="text-center py-20 bg-muted/20 border-2 border-dashed border-border">
              <p className="font-mono text-muted-foreground">TIMELINE EMPTY. INITIALIZE PATH.</p>
            </div>
          )}

          {sortedNodes.map((node, index) => {
            const isLeft = index % 2 === 0;
            return (
              <TimelineItem 
                key={node.id} 
                node={node} 
                isLeft={isLeft} 
                index={index} 
              />
            );
          })}
        </div>
        
        {/* End Node */}
        <div className="flex justify-center mt-8 relative z-10">
          <div className="bg-background border-2 border-primary text-primary px-4 py-2 font-mono text-xs rounded-full shadow-[0_0_10px_rgba(74,246,111,0.2)]">
            CONTINUOUS_INTEGRATION
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineItem({ node, isLeft, index }: { node: any; isLeft: boolean; index: number }) {
  const Icon = getNodeIcon(node.type);

  return (
    <motion.div 
      className={clsx(
        "relative flex md:items-center",
        isLeft ? "md:justify-end" : "md:justify-start"
      )}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Node Dot on Line */}
      <div className="absolute left-[-21px] md:left-1/2 w-11 h-11 bg-background border-4 border-primary rounded-full flex items-center justify-center transform md:-translate-x-1/2 z-10 shadow-lg">
        <Icon className="w-5 h-5 text-primary" />
      </div>

      {/* Connector Line for Mobile (Left side) */}
      <div className="md:hidden absolute left-0 top-6 w-8 h-1 bg-primary" />

      {/* Card Content */}
      <div className={clsx(
        "w-full md:w-[45%] bg-card p-5 border-2 border-border shadow-md rounded-sm relative",
        "after:content-[''] after:absolute after:top-1/2 after:w-4 after:h-4 after:bg-card after:border-t-2 after:border-r-2 after:border-border after:transform after:-translate-y-1/2 after:rotate-45",
        isLeft 
          ? "md:mr-10 after:right-[-9px] after:border-l-0 after:border-b-0" 
          : "md:ml-10 after:left-[-9px] after:border-r-0 after:border-t-0 after:-rotate-135 pl-10 md:pl-5"
      )}>
        <span className="absolute -top-3 right-4 bg-primary text-primary-foreground text-xs font-mono px-2 py-1 shadow-sm">
          {node.date}
        </span>
        
        <h3 className="font-display text-lg font-bold text-foreground mt-1">{node.title}</h3>
        <div className="font-mono text-xs text-primary/70 mb-2 uppercase tracking-wide">
          {node.type}
        </div>
        <p className="text-sm font-serif text-muted-foreground leading-relaxed">
          {node.description}
        </p>
      </div>
    </motion.div>
  );
}

function getNodeIcon(type: string) {
  const t = type.toLowerCase();
  if (t.includes("college") || t.includes("school")) return GraduationCap;
  if (t.includes("work") || t.includes("job")) return Briefcase;
  if (t.includes("course")) return Code;
  if (t.includes("project")) return Flag;
  return Circle;
}

function AddNodeDialog({ nextOrder }: { nextOrder: number }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const createMutation = useCreateLearningNode();
  
  const form = useForm<InsertLearningNode>({
    resolver: zodResolver(insertLearningNodeSchema),
    defaultValues: {
      title: "",
      description: "",
      type: "Online Course",
      date: "",
      order: nextOrder,
      groupId: null
    }
  });

  const onSubmit = (data: InsertLearningNode) => {
    createMutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Success", description: "Node added to path" });
        form.reset({
          title: "",
          description: "",
          type: "Online Course",
          date: "",
          order: nextOrder + 1,
          groupId: null
        });
        setOpen(false);
      },
      onError: () => {
        toast({ title: "Error", description: "Failed to add node", variant: "destructive" });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm" className="font-mono bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-1" />
          EXTEND_PATH
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md font-mono border-4 border-double border-primary/40 bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-primary">New Path Node</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Milestone Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="font-serif" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="College / Job / Project" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Timeframe</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} placeholder="Winter 2023" />
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
                  <FormLabel>Details</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="font-serif" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Hidden Order Field */}
            <input type="hidden" {...form.register("order", { valueAsNumber: true })} />

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground font-bold"
              disabled={createMutation.isPending}
            >
              {createMutation.isPending ? "COMPUTING..." : "ADD MILESTONE"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
