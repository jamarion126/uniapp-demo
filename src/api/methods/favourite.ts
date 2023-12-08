import request from "@/api";

export function list() {
  return request.Get("/favourite/list");
}
