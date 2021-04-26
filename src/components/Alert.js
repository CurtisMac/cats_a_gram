import React from "react";
import PropTypes from "prop-types";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert({ msg, type, setAlert }) {
    const handleClose = () => {
        setAlert({ msg: "", type });
    };
    return (
        <div>
            <Snackbar
                open={msg.length ? true : false}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <MuiAlert
                    onClose={handleClose}
                    severity={type || "info"}
                    elevation={6}
                    variant="filled"
                >
                    {msg}
                </MuiAlert>
            </Snackbar>
        </div>
    );
}

export default Alert;

Alert.defaultProps = {
    type: "info"
}

Alert.propTypes = {
    msg: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["error", "success", "warning", "info"]),
    setAlert: PropTypes.func.isRequired,
};
