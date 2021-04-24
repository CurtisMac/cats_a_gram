import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//components
import ImageCard from "../components/home/ImageCard";

//styles
const useStyles = makeStyles((theme) => ({
    grid: {
        display: "grid",
        gridTemplateColumns: "1fr",
        gridAutoFlow: "dense",
        gap: "10px 0",
        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "10px",
        },
        [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "10px",
        },
    },
}));

function Home({ images, dispatch, setAlert }) {
    const classes = useStyles();
    return (
        <div className={classes.grid}>
            {images.map((img) => (
                <ImageCard
                    key={img.id}
                    dispatch={dispatch}
                    img={img}
                    setAlert={setAlert}
                />
            ))}
        </div>
    );
}

export default Home;
