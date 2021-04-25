import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//components
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//assets
import { ReactComponent as CatIcon } from "../../assets/cat_icon.svg";

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "70vh",
        flexFlow: "column",
    },
    title: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.8em",
        },
    },
}));

function Placeholder() {
    const classes = useStyles();
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            textAlign="center"
            className={classes.root}
        >
            <br/>
                <CatIcon alt="Angelic Cat"/> 
                {/* Icon curtesy of https://pixabay.com/vectors/angelic-cat-feline-halo-heart-1298162/ */}
            <br/>
            <Typography variant="subtitle1" color="textPrimary">
                To get started, <Link to="/upload">upload</Link> your favourite cat photos
            </Typography>
        </Box>
    );
}

export default Placeholder;

