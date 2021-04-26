import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

//styles
const useStyles = makeStyles(() => ({
    img: {
        width: "100%",
        paddingRight: "20px"
    },
}));

function Logo() {
    const classes = useStyles();
    return (
        <Link to="/" >
            <img src={logo} alt="Logo" className={classes.img} />
        </Link>
    );
}

export default Logo;
