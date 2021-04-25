import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
    root: {
        borderRadius: 0,
        width: "90px",
    }
})

function StyledButton(props) {
    const classes = useStyles();
    return (
        <Button className={classes.root} {...props}>{props.children}</Button>
    )
}

export default StyledButton;
