import { create } from "zustand";

interface Post {
  id: number;
  titulo: string;
  body: string;
}

interface CounterState {
  contador: number;
  titulo: string;
  posts: Post[];
  increment: (value: number) => void;
  getPosts: () => Promise<void>;
  clearStore: () => void; 
  multi: (value: number) => void;
}

export const useCounterStore = create<CounterState>((set, get) => ({
  contador: 1,
  titulo: 'Monine con la wacha',
  posts: [],
  
  increment: (value: number) => {
    set((state) => ({
      contador: state.contador + value,
    }));
    get().getPosts();  
  },


  getPosts: async () => {
    const { contador } = get();
    const allPosts = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
    const limitedPosts = allPosts.slice(0, contador); 
    set((state) => ({
      ...state,
      posts: limitedPosts,
    }));
  },

  clearStore: () => set(() => ({
    contador: 2,
    titulo: '',
    posts: [], 
  })),

  multi: (value: number) => {
    const { contador } = get();
    set(() => ({
      contador: contador * value,
    }));
    get().getPosts();  
  },
}));
