import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia } from "@material-ui/core";

//components
import ImageCardActions from "./ImageCardActions";

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
    },
    landscape: {
        gridColumn: "span 1",
        gridRow: "span 1",
        [theme.breakpoints.up("sm")]: {
            gridColumn: "span 2",
            gridRow: "span 1",
        },
    },
    portrait: {
        gridColumn: "span 1",
        gridRow: "span 1",
        [theme.breakpoints.up("sm")]: {
            gridColumn: "span 1",
            gridRow: "span 2",
        },
    },
    square: {
        gridColumn: "span 1",
        gridRow: "span 1",
    },
    img: {
        height: "100%",
        width: "100%",
    },
}));

function ImageCard({ img, dispatch }) {
    const classes = useStyles();
    const { height, width, url } = img;
    const shape =
        width > height ? "landscape" : height > width ? "portrait" : "square";
    return (
        <Card className={`${classes.root} ${classes[shape]}`}>
            <CardMedia
                className={classes.img}
                component="img"
                alt="A Cat"
                src={url}
                title="A Cat"
            />
            <ImageCardActions img={img} dispatch={dispatch} />
        </Card>
    );
}

export default ImageCard;
