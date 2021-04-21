import React from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

//components
import Home from "./views/Home";
import Upload from "./views/Upload";

function App() {
    return (
        <React.Fragment>
            <Header />
            <Container maxWidth="md">
                <Switch>
                    <Route path="/upload">
                        <Upload />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Container>
        </React.Fragment>
    );
}

export default App;
