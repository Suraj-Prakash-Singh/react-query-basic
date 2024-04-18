import { useQuery, useMutation} from "@tanstack/react-query"

function App() {

  const query = useQuery({
    queryKey: ["todo"],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
  })

  const dummyPost = {
    title: 'Random Post title',
    id: 696969,
    body: 'This post was created by suraj'
  }

  const mutation = useMutation({
    mutationFn: (newPost) => fetch('https://jsonplaceholder.typicode.com/posts', {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json()),
    onSuccess: 
  })

  if(query.error || mutation.error){
    return <div>Error ocurred!</div>
  }
  if(query.isLoading){
    return <>Loading</>
  }
  return (
    <>
    <button onClick={() => mutation.mutate(dummyPost)}>Add Post</button>
    {query.data.map((post) => 
      <div>
        <h4>ID: {post.id}</h4>
        <p>Title: {post.title}</p>
        <p>Description: {post.body}</p>
      </div>)}
    </>
  )
}

export default App
