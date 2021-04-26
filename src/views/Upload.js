import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

//components
import FileSelector from "../components/upload/FileSelector";
import Progress from "../components/upload/Progress";
import Typography from "@material-ui/core/Typography";

//utils
import uploadImage from "../adaptors/uploadImg";

function Upload({ setAlert, dispatch }) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function uploadFile() {
            try {
                setLoading(true);
                const formdata = new FormData();
                formdata.append("file", file, "file");
                const newImage = await uploadImage(formdata, setProgress);
                dispatch({ type: "add", payload: newImage });
                setSuccess(true);
                setLoading(false);
            } catch (err) {
                let alert = {
                    msg: "Couldn't upload image, please try again",
                    type: "error",
                };
                if (
                    err.response.data.message.match(/correct animal not found/i)
                ) {
                    alert = {
                        msg: "Oops! Couldn't upload that, only cats allowed!",
                        type: "warning",
                    };
                }
                setLoading(false);
                setError(alert);
            }
        }
        if (file) uploadFile();
    }, [file, dispatch]);

    useEffect(() => {
        if (error) {
            setAlert(error);
        }
    }, [error, setAlert]);

    return (
        <>
            <Typography variant="subtitle1" color="textPrimary" align="center" component="h1" gutterBottom={true}>
                Upload some cat photos!
            </Typography>
            {!loading && <FileSelector setFile={setFile} />}
            {loading && <Progress progress={progress} />}
            {success && <Redirect to="/" />}
        </>
    );
}

export default Upload;
