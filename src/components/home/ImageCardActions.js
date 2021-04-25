import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";

//icons
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";

//utils
import saveFavourite from "../../adaptors/saveFavourite";
import deleteFavourite from "../../adaptors/deleteFavourite";
import deleteImg from "../../adaptors/deleteImg";
import vote from "../../adaptors/vote";

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

function ImageCardActions({ img, dispatch, setAlert }) {
    const isFavourite = img.favourite;
    const classes = useStyles();

    const toggleFavourite = async () => {
        try {
            const payload = { img: img.id, favId: null };
            if (!isFavourite) {
                const resp = await saveFavourite(img.id);
                payload.favId = resp.id;
            } else if (isFavourite) {
                await deleteFavourite(img.favourite);
            }
            dispatch({
                type: "toggleFavourite",
                payload,
            });
        } catch {
            setAlert({
                msg:
                    "Network Error - couldn't save favourite, please try again",
                type: "error",
            });
        }
    };

    const onVote = async (dir) => {
        try {
            await vote(dir, img.id);
            dispatch({
                type: "vote",
                payload: { dir, img: img.id },
            });
        } catch (err) {
            setAlert({
                msg: "Network Error - couldn't save vote, please try again",
                type: "error",
            });
        }
    };

    const onDelete = () => {
        try {
            deleteImg(img.id);
            dispatch({ type: "delete", payload: img.id });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className={classes.root}>
                <div>
                    <IconButton
                        color="inherit"
                        aria-label="upvote"
                        onClick={() => {
                            onVote("up");
                        }}
                    >
                        <ThumbUpAltOutlinedIcon />
                    </IconButton>
                    <span>{img.upvotes - img.downvotes}</span>
                    <IconButton
                        color="inherit"
                        aria-label="downvote"
                        onClick={() => {
                            onVote("down");
                        }}
                    >
                        <ThumbDownAltOutlinedIcon />
                    </IconButton>
                </div>
                <div>
                    <IconButton
                        color="secondary"
                        onClick={toggleFavourite}
                        aria-label={
                            isFavourite ? "add to favorites" : "remove favorite"
                        }
                    >
                        {isFavourite ? (
                            <FavoriteIcon />
                        ) : (
                            <FavoriteBorderIcon />
                        )}
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="delete"
                        onClick={onDelete}
                    >
                        <DeleteOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </>
    );
}

export default ImageCardActions;
