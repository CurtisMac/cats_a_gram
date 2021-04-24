import React, { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

//components
import Home from "./views/Home";
import Upload from "./views/Upload";
import Alert from "./components/Alert";

//utils
import reducer from "./utils/imagesReducer";
import loadImages from "./utils/loadImages";

const initialState = [];

function App() {
    const [images, dispatch] = useReducer(reducer, initialState);
    const [alert, setAlert] = useState({ msg: "", type: "" });

    useEffect(() => {
        loadImages(dispatch).catch((err) => {
            console.error(err);
            setAlert({ msg: "Couldn't Fetch Images", type: "error" });
        });
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
                        <Home
                            images={images}
                            dispatch={dispatch}
                            setAlert={setAlert}
                        />
                    </Route>
                </Switch>
            </Container>
            <Alert msg={alert.msg} type={alert.type} setAlert={setAlert} />
        </React.Fragment>
    );
}

export default App;
