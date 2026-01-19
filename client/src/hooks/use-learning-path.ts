import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertLearningNode } from "@shared/routes";

export function useLearningNodes() {
  return useQuery({
    queryKey: [api.learningPath.list.path],
    queryFn: async () => {
      const res = await fetch(api.learningPath.list.path);
      if (!res.ok) throw new Error("Failed to fetch learning path");
      return api.learningPath.list.responses[200].parse(await res.json());
    },
  });
}

export function useCreateLearningNode() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertLearningNode) => {
      const res = await fetch(api.learningPath.create.path, {
        method: api.learningPath.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to create node");
      return api.learningPath.create.responses[201].parse(await res.json());
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [api.learningPath.list.path] }),
  });
}
