import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Event } from './pages/Event';

function App() {
  return (
    <ApolloProvider client={client}>
    <Event />
    {/* <BrowserRouter>
    </BrowserRouter> */}
  </ApolloProvider>
  )
}

export default App
