export const fetchTodos = async () => {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5',
  );
  return res.json();
};
