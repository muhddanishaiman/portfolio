import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===

// Portfolio Profile Information (Single record usually, but expandable)
export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  bio: text("bio").notNull(),
  imageUrl: text("image_url"), // For the picture
  linkedinUrl: text("linkedin_url"),
  githubUrl: text("github_url"),
  twitterUrl: text("twitter_url"),
});

// Knowledge Vault Items
export const knowledgeItems = pgTable("knowledge_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  source: text("source").notNull(), // e.g., "Coursera", "Book", "Documentation"
  category: text("category"), // e.g., "Frontend", "Backend", "DevOps"
  link: text("link"), // URL to the source
  createdAt: timestamp("created_at").defaultNow(),
});

// Learning Path Nodes (for the flowchart)
export const learningNodes = pgTable("learning_nodes", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  date: text("date"), // e.g., "2020 - 2021" or "Fall 2023"
  type: text("type").notNull(), // e.g., "College", "Online Course", "Project"
  order: integer("order").notNull(), // To sort them top to bottom
  groupId: integer("group_id"), // Items with same group_id are "parallel" (learned at same time)
});

// === SCHEMAS ===

export const insertProfileSchema = createInsertSchema(profile).omit({ id: true });
export const insertKnowledgeItemSchema = createInsertSchema(knowledgeItems).omit({ id: true, createdAt: true });
export const insertLearningNodeSchema = createInsertSchema(learningNodes).omit({ id: true });

// === TYPES ===

export type Profile = typeof profile.$inferSelect;
export type InsertProfile = z.infer<typeof insertProfileSchema>;

export type KnowledgeItem = typeof knowledgeItems.$inferSelect;
export type InsertKnowledgeItem = z.infer<typeof insertKnowledgeItemSchema>;

export type LearningNode = typeof learningNodes.$inferSelect;
export type InsertLearningNode = z.infer<typeof insertLearningNodeSchema>;
