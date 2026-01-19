import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Profile Routes
  app.get(api.profile.get.path, async (req, res) => {
    const profile = await storage.getProfile();
    if (!profile) {
      return res.status(404).json({ message: 'Profile not set up yet' });
    }
    res.json(profile);
  });

  app.post(api.profile.update.path, async (req, res) => {
    try {
      const input = api.profile.update.input.parse(req.body);
      const updated = await storage.updateProfile(input);
      res.json(updated);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  // Knowledge Routes
  app.get(api.knowledge.list.path, async (req, res) => {
    const items = await storage.getKnowledgeItems();
    res.json(items);
  });

  app.post(api.knowledge.create.path, async (req, res) => {
    try {
      const input = api.knowledge.create.input.parse(req.body);
      const created = await storage.createKnowledgeItem(input);
      res.status(201).json(created);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  // Learning Path Routes
  app.get(api.learningPath.list.path, async (req, res) => {
    const nodes = await storage.getLearningNodes();
    res.json(nodes);
  });

  app.post(api.learningPath.create.path, async (req, res) => {
    try {
      const input = api.learningPath.create.input.parse(req.body);
      const created = await storage.createLearningNode(input);
      res.status(201).json(created);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ message: err.errors[0].message });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const profile = await storage.getProfile();
  if (!profile) {
    await storage.updateProfile({
      name: "Alex Developer",
      bio: "A passionate full-stack developer with a love for retro aesthetics and clean code. Welcome to my digital garden.",
      imageUrl: "https://placehold.co/400x400/333/FFF?text=AD",
      linkedinUrl: "https://linkedin.com",
      githubUrl: "https://github.com",
      twitterUrl: "https://twitter.com"
    });
  }

  const knowledge = await storage.getKnowledgeItems();
  if (knowledge.length === 0) {
    await storage.createKnowledgeItem({
      title: "React Hooks Deep Dive",
      description: "Understanding the nuances of useEffect, useMemo, and custom hooks.",
      source: "Official React Docs & Various Blogs",
      category: "Frontend",
      link: "https://react.dev"
    });
    await storage.createKnowledgeItem({
      title: "PostgreSQL Indexing",
      description: "Learned about B-Tree, Hash, and GIN indexes for optimizing query performance.",
      source: "UC Berkeley Database Course (Online)",
      category: "Backend",
      link: "https://postgres.org"
    });
    await storage.createKnowledgeItem({
      title: "System Design Patterns",
      description: "Study of microservices, load balancing, and caching strategies.",
      source: "Designing Data-Intensive Applications (Book)",
      category: "Architecture",
      link: "#"
    });
  }

  const nodes = await storage.getLearningNodes();
  if (nodes.length === 0) {
    // Example of branching/parallel learning
    await storage.createLearningNode({
      title: "Started Computer Science Degree",
      description: "Enrolled in University to study fundamentals of CS.",
      date: "Sep 2018",
      type: "University",
      order: 1,
      groupId: 1
    });
    await storage.createLearningNode({
      title: "Web Development Bootcamp",
      description: "Self-taught HTML, CSS, and JS on the weekends.",
      date: "Sep 2018",
      type: "Self-Study",
      order: 1,
      groupId: 1
    });
    await storage.createLearningNode({
      title: "First Internship",
      description: "Junior Web Dev intern at a local startup.",
      date: "Summer 2020",
      type: "Work",
      order: 2,
      groupId: null
    });
    await storage.createLearningNode({
      title: "Graduated",
      description: "Bachelor of Science in Computer Science.",
      date: "May 2022",
      type: "University",
      order: 3,
      groupId: null
    });
  }
}
