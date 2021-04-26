import React, { useEffect, useReducer, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";

//components
import Header from "./components/Header";
import { Container } from "@material-ui/core";
import Home from "./views/Home";
import Upload from "./views/Upload";
import Alert from "./components/Alert";

//utils
import reducer from "./utils/imagesReducer";
import fetchImagesData from "./utils/fetchImagesData";

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
    const [alert, setAlert] = useState({ msg: "", type: "error" });

    useEffect(() => {
        async function loadImageData() {
            const payload = await fetchImagesData().catch(() => {
                setAlert({ msg: "Couldn't Fetch Images", type: "error" });
            });
            dispatch({ type: "set", payload });
        }
        loadImageData();
    }, []);

    return (
        <React.Fragment>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <Router>
                    <Header />
                    <Container maxWidth="md" className={classes.container}>
                        <Switch>
                            <Route path="/upload">
                                <Upload
                                    setAlert={setAlert}
                                    dispatch={dispatch}
                                />
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
                    <Alert
                        msg={alert.msg}
                        type={alert.type}
                        setAlert={setAlert}
                    />
                </Router>
            </ThemeProvider>
        </React.Fragment>
    );
}

export default App;
