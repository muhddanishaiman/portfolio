import { useProfile } from "@/hooks/use-profile";
import { RetroCard } from "@/components/RetroCard";
import { Github, Linkedin, Loader2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import profilePhoto from "@assets/IMG_5654_1768858943179.jpeg";

export default function Home() {
  const { data: profile, isLoading } = useProfile();
  
  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Fallback data if no profile exists yet
  const displayProfile = profile || {
    name: "Danish Ezwan",
    bio: "Welcome to my retro portfolio.",
    imageUrl: null,
    githubUrl: "https://github.com/muhddanishaiman",
    linkedinUrl: "https://www.linkedin.com/in/danish-ezwan/"
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-primary dark:text-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          HELLO, WORLD.
        </motion.h1>
        <p className="font-mono text-muted-foreground">
          // Initializing portfolio sequence...
        </p>
      </div>

      <RetroCard className="transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Profile Image Area */}
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-square w-full relative overflow-hidden bg-muted/30 border-2 border-dashed border-primary/30 p-2">
              <div className="w-full h-full bg-background border border-border relative overflow-hidden group">
                <img 
                  src={profilePhoto} 
                  alt={displayProfile.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Texture */}
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none" />
              </div>
              
              {/* Decorative tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary/20 -rotate-2 backdrop-blur-sm" />
            </div>
          </div>

          {/* Profile Content */}
          <div className="flex-1 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold font-display border-b-4 border-primary/20 inline-block pb-1 mb-1">
                  {displayProfile.name}
                </h2>
                <div className="font-mono text-sm text-primary/70 mt-1">
                  UNDERGRADUATE AT PENN STATE UNIVERSITY
                </div>
              </div>
            </div>

            <div className="font-serif text-lg leading-relaxed text-foreground/90">
              {displayProfile.bio.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-dashed border-border">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Connect with me
              </div>
              <div className="flex gap-4">
                {displayProfile.githubUrl && (
                  <SocialLink href={displayProfile.githubUrl} icon={Github} label="GitHub" />
                )}
                {displayProfile.linkedinUrl && (
                  <SocialLink href={displayProfile.linkedinUrl} icon={Linkedin} label="LinkedIn" />
                )}
                <SocialLink href="mailto:muhdnish2572@gmail.com" icon={Mail} label="Email" />
              </div>
            </div>
          </div>
        </div>
      </RetroCard>
      
    </div>
  );
}

function SocialLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 border-2 border-border hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-200 bg-background group"
      aria-label={label}
      data-testid={`link-${label.toLowerCase()}`}
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
}
