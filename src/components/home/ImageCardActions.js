import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        bottom: 0,
        background: "rgb(29,29,29)",
        background: "linear-gradient(0deg, rgb(0 0 0 / 87%) 0%, rgb(96 96 96 / 0%) 100%)",
        width: "100%",
        color: "white"
    },
    icon: {
        // color: "white",
    },
}));

function ImageCardActions({ img, dispatch }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <IconButton color="secondary" aria-label="add to favorites">
                <FavoriteBorderOutlinedIcon className={classes.icon} />
            </IconButton>
            <IconButton color="inherit" aria-label="add to favorites">
                <ThumbUpAltIcon className={classes.icon} />
            </IconButton>
            <span className={classes.icon}>13</span>
            <IconButton color="inherit" aria-label="add to favorites">
                <ThumbDownAltIcon className={classes.icon} />
            </IconButton>
        </div>
    );
}

export default ImageCardActions;
