import request from "@/api";

export function login(data: { username: string; password: string }) {
  return request.Post("/login", data);
}
