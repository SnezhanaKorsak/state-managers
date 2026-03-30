import { AppStore } from './AppStore';
import { TodoStore } from './TodoStore';

export class RootStore {
  todoStore: TodoStore;
  appStore: AppStore;

  constructor() {
    this.todoStore = new TodoStore(this);
    this.appStore = new AppStore(this);
  }
}

export const rootStore = new RootStore();
