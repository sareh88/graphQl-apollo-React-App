import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Launche from "./components/Launche";

import Logo from "./assets/images/logo.jpg";

import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <div style={{ textAlign: "center", opacity: 0.4 }}>
              <img
                src={Logo}
                alt="space x logo"
                style={{ height: "200px", width: "450px", textAlign: "center" }}
              />
            </div>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launche} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
