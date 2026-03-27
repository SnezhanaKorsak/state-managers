export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export type Theme = 'light' | 'dark';

export type Filter = 'all' | 'active' | 'completed';
