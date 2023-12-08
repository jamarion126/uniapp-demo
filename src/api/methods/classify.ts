import request from "@/api";

export function classifyList(id: string) {
  return request.Get("/classify/list", {
    params: { id },
  });
}
