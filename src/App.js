import React, { Component } from "react";
import Nav from "./Components/Nav";
import Category from "./Components/Category";
import "./App.css";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';



class App extends Component {
  render() {
    const client = new ApolloClient({
      uri: "http://localhost:4000/graphql",
    });
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Nav />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
