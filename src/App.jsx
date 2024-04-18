import { useQuery } from "@tanstack/react-query"

function App() {

  const query = useQuery({
    queryKey: ["todo"],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then((res) => res.json())
  })

  if(query.error){
    return <div>Error ocurred!</div>
  }
  if(query.isLoading){
    return <>Loading</>
  }
  return (
    <>{query.data.map((todo) => 
      <div>
        <h2>ID: {todo.id}</h2>
        <p>Title: {todo.title}</p>
      </div>)}
    </>
  )
}


// function wait(duration){
//   return new Promise(resolve => setTimeout(resolve, duration));
// }
export default App
