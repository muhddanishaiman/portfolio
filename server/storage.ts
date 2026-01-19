import { db } from "./db";
import {
  profile, knowledgeItems, learningNodes,
  type Profile, type InsertProfile,
  type KnowledgeItem, type InsertKnowledgeItem,
  type LearningNode, type InsertLearningNode
} from "@shared/schema";
import { eq, asc } from "drizzle-orm";

export interface IStorage {
  // Profile
  getProfile(): Promise<Profile | undefined>;
  updateProfile(profile: InsertProfile): Promise<Profile>;

  // Knowledge
  getKnowledgeItems(): Promise<KnowledgeItem[]>;
  createKnowledgeItem(item: InsertKnowledgeItem): Promise<KnowledgeItem>;

  // Learning Path
  getLearningNodes(): Promise<LearningNode[]>;
  createLearningNode(node: InsertLearningNode): Promise<LearningNode>;
}

export class DatabaseStorage implements IStorage {
  async getProfile(): Promise<Profile | undefined> {
    const [userProfile] = await db.select().from(profile).limit(1);
    return userProfile;
  }

  async updateProfile(newProfile: InsertProfile): Promise<Profile> {
    // Check if profile exists
    const existing = await this.getProfile();
    if (existing) {
      const [updated] = await db.update(profile)
        .set(newProfile)
        .where(eq(profile.id, existing.id))
        .returning();
      return updated;
    } else {
      const [created] = await db.insert(profile).values(newProfile).returning();
      return created;
    }
  }

  async getKnowledgeItems(): Promise<KnowledgeItem[]> {
    return await db.select().from(knowledgeItems).orderBy(asc(knowledgeItems.id));
  }

  async createKnowledgeItem(item: InsertKnowledgeItem): Promise<KnowledgeItem> {
    const [created] = await db.insert(knowledgeItems).values(item).returning();
    return created;
  }

  async getLearningNodes(): Promise<LearningNode[]> {
    return await db.select().from(learningNodes).orderBy(asc(learningNodes.order));
  }

  async createLearningNode(node: InsertLearningNode): Promise<LearningNode> {
    const [created] = await db.insert(learningNodes).values(node).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
