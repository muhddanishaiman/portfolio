import { useLearningNodes } from "@/hooks/use-learning-path";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

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
      <div className="border-b-4 border-double border-primary/20 pb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary dark:text-glow">LEARNING PATH</h1>
        <p className="font-serif text-muted-foreground mt-2">Here is a flowchart of my education from high school up until now</p>
      </div>

      {/* Flowchart Container */}
      <div className="flex flex-col items-center max-w-3xl mx-auto px-4">
        
        {sortedNodes.length === 0 ? (
          <div className="text-center py-20 bg-muted/20 border-2 border-dashed border-border w-full">
            <p className="font-mono text-muted-foreground">FLOWCHART EMPTY. ADD NODES TO PATH.</p>
          </div>
        ) : (
          <>
            {sortedNodes.map((node, index) => (
              <FlowchartNode 
                key={node.id} 
                node={node} 
                index={index}
                isLast={index === sortedNodes.length - 1}
              />
            ))}
            
            {/* End Node */}
            <motion.div 
              className="mt-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/15 border-2 border-primary text-foreground px-6 py-3 font-mono text-sm rounded-full text-center">
                <span className="font-display font-bold">Present</span>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

function FlowchartNode({ node, index, isLast }: { node: any; index: number; isLast: boolean }) {
  // Determine node shape based on type
  const nodeType = node.type?.toLowerCase() || '';
  let shapeClass = 'rounded'; // default rectangle
  
  if (nodeType.includes('start') || nodeType.includes('end') || nodeType.includes('college') || nodeType.includes('university')) {
    shapeClass = 'rounded-full px-8'; // oval
  } else if (nodeType.includes('decision') || nodeType.includes('choice')) {
    shapeClass = 'rotate-45'; // diamond (content will be counter-rotated)
  }

  const isDiamond = nodeType.includes('decision') || nodeType.includes('choice');

  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Node Box */}
      <div 
        className={`
          bg-primary/15 border-2 border-primary 
          ${isDiamond ? 'w-32 h-32 flex items-center justify-center' : 'px-6 py-4 min-w-[200px] max-w-[280px]'}
          ${shapeClass}
          text-center transition-all hover:bg-primary/25 hover:-translate-y-1
        `}
      >
        <div className={isDiamond ? '-rotate-45' : ''}>
          <span className="font-display font-bold text-foreground block text-sm md:text-base">
            {node.title}
          </span>
          {node.date && !isDiamond && (
            <span className="font-mono text-xs text-muted-foreground block mt-1">
              {node.date}
            </span>
          )}
        </div>
      </div>

      {/* Arrow Down (if not last) */}
      {!isLast && (
        <div className="flex flex-col items-center py-1">
          {/* Vertical Line */}
          <div className="w-0.5 h-8 bg-primary" />
          {/* Arrow Head */}
          <div 
            className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-primary"
          />
        </div>
      )}
    </motion.div>
  );
}
