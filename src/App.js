import React, { useEffect, useReducer, useState } from "react";
import Header from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";

//components
import { Container } from "@material-ui/core";
import Home from "./views/Home";
import Upload from "./views/Upload";
import Alert from "./components/Alert";

//utils
import reducer from "./utils/imagesReducer";
import loadImages from "./utils/loadImages";

//styles
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: "20px",
        paddingBottom: "20px",
        [theme.breakpoints.up("md")]: {
            paddingTop: "40px",
            paddingBottom: "40px",
        },
    },
}));

const initialState = [];

function App() {
    const classes = useStyles();
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
            <Container maxWidth="md" className={classes.container}>
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
