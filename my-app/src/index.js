import ReactDOM from "react-dom/client";
import App from "./components/App/App";

import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // useQuery,
  // gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
