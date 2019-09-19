import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";

import { ApolloProvider } from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});
ReactDOM.render(
  <div>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </div>,
  document.getElementById("root")
);
serviceWorker.register(null);
