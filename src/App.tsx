import { useEffect } from "react"
import { client } from "./lib/apollo"



function App() {
  return (
    useEffect(() => {
      client.query({
        query: GET_LESSONS_QUERY,
      }).then(response => {
        console.log(response.data)
      })
    }, [])
  <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
  )
}

export default App
