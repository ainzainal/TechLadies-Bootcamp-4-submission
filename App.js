import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./Home";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { About } from "./About";
import { Todos } from "./Todos";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/todos" component={Todos} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
