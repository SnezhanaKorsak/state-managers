export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type Filter = 'all' | 'active' | 'completed';
export type Theme = 'light' | 'dark';
