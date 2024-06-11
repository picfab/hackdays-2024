export const ServerComponent = async() => {
  console.log('ServerComponent');
  const test = fetch('https://jsonplaceholder.typicode.com/todos/1')
  return <div>ServerComponent</div>;
};
