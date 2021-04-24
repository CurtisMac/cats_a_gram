import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

//icons
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexFlow: "row nowrap",
        justifyContent: "space-between",
        position: "absolute",
        bottom: "-5px",
        background:
            "linear-gradient(0deg, rgb(0 0 0 / 100%) 35%, rgb(96 96 96 / 10%) 90%, rgb(96 96 96 / 0%) 100%)",
        width: "100%",
        color: "white",
    },
}));

function ImageCardActions({ img, dispatch }) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <div>
                    <IconButton color="inherit" aria-label="downvote">
                        <ThumbUpAltOutlinedIcon />
                    </IconButton>
                    <span>13</span>
                    <IconButton color="inherit" aria-label="upvote">
                        <ThumbDownAltOutlinedIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton color="inherit" aria-label="delete">
                        <DeleteOutlinedIcon />
                    </IconButton>
                    <IconButton color="secondary" aria-label="add to favorites">
                        <FavoriteBorderOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
}

export default ImageCardActions;
