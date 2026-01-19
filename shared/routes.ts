import { z } from 'zod';
import { insertProfileSchema, insertKnowledgeItemSchema, insertLearningNodeSchema, profile, knowledgeItems, learningNodes } from './schema';

export const errorSchemas = {
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  profile: {
    get: {
      method: 'GET' as const,
      path: '/api/profile',
      responses: {
        200: z.custom<typeof profile.$inferSelect>(),
        404: errorSchemas.notFound,
      },
    },
    update: {
      method: 'POST' as const, // Using POST for upsert-like behavior for simplicity
      path: '/api/profile',
      input: insertProfileSchema,
      responses: {
        200: z.custom<typeof profile.$inferSelect>(),
      },
    },
  },
  knowledge: {
    list: {
      method: 'GET' as const,
      path: '/api/knowledge',
      responses: {
        200: z.array(z.custom<typeof knowledgeItems.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/knowledge',
      input: insertKnowledgeItemSchema,
      responses: {
        201: z.custom<typeof knowledgeItems.$inferSelect>(),
      },
    },
  },
  learningPath: {
    list: {
      method: 'GET' as const,
      path: '/api/learning-path',
      responses: {
        200: z.array(z.custom<typeof learningNodes.$inferSelect>()),
      },
    },
    create: {
      method: 'POST' as const,
      path: '/api/learning-path',
      input: insertLearningNodeSchema,
      responses: {
        201: z.custom<typeof learningNodes.$inferSelect>(),
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}
