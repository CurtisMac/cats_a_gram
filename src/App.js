import React, { useEffect, useReducer } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

//components
import Home from "./views/Home";
import Upload from "./views/Upload";

//utils
import reducer from "./utils/imagesReducer";
import loadImages from "./utils/loadImages";

const initialState = [];

function App() {
    const [images, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        loadImages(dispatch);
    }, []);
    return (
        <React.Fragment>
            <Header />
            <Container maxWidth="md">
                <Switch>
                    <Route path="/upload">
                        <Upload />
                    </Route>
                    <Route path="/">
                        <Home images={images} dispatch={dispatch} />
                    </Route>
                </Switch>
            </Container>
        </React.Fragment>
    );
}

export default App;
