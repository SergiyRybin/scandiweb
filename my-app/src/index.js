import ReactDOM from "react-dom/client";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function ExchangeRates() {
  const { data } = useQuery(gql`
    query {
      categories {
        name
      }
    }
  `);

  if (data) {
    console.log(data.categories);
    return data.categories.map((el, index) => (
      <div key={index}>
        <p>{el.name}</p>
      </div>
    ));
  }
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <ExchangeRates />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
