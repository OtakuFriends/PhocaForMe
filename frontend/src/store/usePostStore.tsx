import { Post } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PostState {
  post: Post | null;
  setPost: (post: Post) => void;
  clearPost: () => void;
}

export const usePostStore = create<PostState>()(
  persist(
    (set) => ({
      post: null,
      setPost: (post) => set({ post }),
      clearPost: () => set({ post: null }),
    }),
    {
      name: "post-storage",
    }
  )
);
