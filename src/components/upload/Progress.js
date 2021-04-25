import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

//components
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

//styles
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        border: "dashed",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        boxSizing: "border-box",
        minHeight: "250px",
        borderColor: "rgba(0, 0, 0, 0.12)",
        borderRadius: "4px",
        backgroundColor: "#fff",
    },
}));

function Progress({ progress }) {
    const classes = useStyles();
    return (
        <Box
            position="relative"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            className={classes.root}
        >
            <CircularProgress
                variant={progress === 100 ? "indeterminate" : "determinate"}
                value={progress}
            />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                >{`${progress}%`}</Typography>
            </Box>
        </Box>
    );
}

export default Progress;

Progress.propTypes = {
    progress: PropTypes.number.isRequired,
};
