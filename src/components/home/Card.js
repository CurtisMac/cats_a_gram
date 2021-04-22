import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, CardActions, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";

//styles
const useStyles = makeStyles((theme) => ({
    root: {
    },
    landscape: {
        gridColumn: "span 2",
        gridRow: "span 1",
    },
    portrait: {
        gridColumn: "span 1",
        gridRow: "span 2",
    },
    square: {
        gridColumn: "span 1",
        gridRow: "span 1",
    },
    img: {
        height: "calc(100% - 50px)",
        width: "100%"
    }
}));

function ImageCard({ img, dispatch }) {
    const classes = useStyles();
    console.log(img);
    const { height, width, url } = img;
    const shape =
        width > height ? "landscape" : height > width ? "portrait" : "square";
    return (
        <Card className={`${classes[shape]}`}>
            <CardMedia
                className={classes.img}
                component="img"
                alt="A Cat"
                src={url}
                title="A Cat"
            />
            <div>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
            </div>
        </Card>
    );
}

export default ImageCard;
