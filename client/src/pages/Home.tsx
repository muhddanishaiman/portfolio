import { useProfile, useUpdateProfile } from "@/hooks/use-profile";
import { RetroCard } from "@/components/RetroCard";
import { Github, Linkedin, Twitter, Globe, PenTool, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertProfileSchema, type InsertProfile } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

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
    name: "New Developer",
    bio: "Welcome to your retro portfolio. Click edit to set up your profile!",
    imageUrl: null,
    githubUrl: "",
    linkedinUrl: "",
    twitterUrl: ""
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
            <div className="aspect-[4/5] w-full relative overflow-hidden bg-muted/30 border-2 border-dashed border-primary/30 p-2">
              <div className="w-full h-full bg-background border border-border relative overflow-hidden group">
                {displayProfile.imageUrl ? (
                  <img 
                    src={displayProfile.imageUrl} 
                    alt={displayProfile.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  // Placeholder Unsplash image
                  // creative portrait silhouette
                  <div className="w-full h-full flex items-center justify-center bg-muted">
                     <span className="font-mono text-4xl text-muted-foreground/50">?</span>
                  </div>
                )}
                
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
                  FULL STACK DEVELOPER
                </div>
              </div>
              <EditProfileDialog profile={displayProfile} />
            </div>

            <div className="font-serif text-lg leading-relaxed text-foreground/90">
              {displayProfile.bio.split('\n').map((line, i) => (
                <p key={i} className="mb-2">{line}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-dashed border-border">
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                Connect via Protocol
              </div>
              <div className="flex gap-4">
                {displayProfile.githubUrl && (
                  <SocialLink href={displayProfile.githubUrl} icon={Github} label="GitHub" />
                )}
                {displayProfile.linkedinUrl && (
                  <SocialLink href={displayProfile.linkedinUrl} icon={Linkedin} label="LinkedIn" />
                )}
                {displayProfile.twitterUrl && (
                  <SocialLink href={displayProfile.twitterUrl} icon={Twitter} label="Twitter" />
                )}
                {/* Example of how other links might look */}
                {!displayProfile.githubUrl && !displayProfile.linkedinUrl && (
                   <span className="text-muted-foreground italic text-sm">No links configured.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </RetroCard>
      
      {/* Decorative footer stats */}
      <div className="grid grid-cols-3 gap-4 font-mono text-xs text-center opacity-60">
        <div className="border border-border p-2">
          <div className="font-bold text-primary">UPTIME</div>
          <div>99.9%</div>
        </div>
        <div className="border border-border p-2">
          <div className="font-bold text-primary">LOCATION</div>
          <div>Remote</div>
        </div>
        <div className="border border-border p-2">
          <div className="font-bold text-primary">STATUS</div>
          <div>Available</div>
        </div>
      </div>
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
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    </a>
  );
}

function EditProfileDialog({ profile }: { profile: any }) {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();
  const updateMutation = useUpdateProfile();
  
  const form = useForm<InsertProfile>({
    resolver: zodResolver(insertProfileSchema),
    defaultValues: {
      name: profile.name,
      bio: profile.bio,
      imageUrl: profile.imageUrl || "",
      linkedinUrl: profile.linkedinUrl || "",
      githubUrl: profile.githubUrl || "",
      twitterUrl: profile.twitterUrl || "",
    }
  });

  const onSubmit = (data: InsertProfile) => {
    updateMutation.mutate(data, {
      onSuccess: () => {
        toast({ title: "Success", description: "Profile updated successfully" });
        setOpen(false);
      },
      onError: () => {
        toast({ title: "Error", description: "Failed to update profile", variant: "destructive" });
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <PenTool className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md font-mono border-4 border-double border-primary/40 bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-xl text-primary">Edit Profile Card</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Identity Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="font-serif" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} placeholder="https://..." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bio Data</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="font-serif min-h-[100px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="githubUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GitHub</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} placeholder="https://..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="linkedinUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LinkedIn</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} placeholder="https://..." />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              disabled={updateMutation.isPending}
            >
              {updateMutation.isPending ? "SAVING..." : "COMMIT CHANGES"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
