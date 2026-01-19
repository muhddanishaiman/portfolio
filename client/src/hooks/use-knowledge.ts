import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertKnowledgeItem } from "@shared/routes";

export function useKnowledgeItems() {
  return useQuery({
    queryKey: [api.knowledge.list.path],
    queryFn: async () => {
      const res = await fetch(api.knowledge.list.path);
      if (!res.ok) throw new Error("Failed to fetch knowledge items");
      return api.knowledge.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateKnowledgeItem() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertKnowledgeItem) => {
      const res = await fetch(api.knowledge.create.path, {
        method: api.knowledge.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create item");
      return api.knowledge.create.responses[201].parse(await res.json());
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [api.knowledge.list.path] }),
  });
}
