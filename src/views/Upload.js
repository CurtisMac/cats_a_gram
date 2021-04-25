import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

//components
import FileSelector from "../components/upload/FileSelector";
import Progress from '../components/upload/Progress';

//utils
import uploadImage from "../adaptors/uploadImg";

function Upload({reloadData}) {
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
                await uploadImage(formdata, setProgress);
                await reloadData();
                setLoading(false);
                setSuccess(true);
            } catch (err) {
                console.log(err);
                setError(err);
            }
        }
        if (file) uploadFile();
    }, [file]);

    return (
        <>
            {!loading && <FileSelector setFile={setFile} />}
            {loading && <Progress progress={progress} />}
            {success && <Redirect to="/" />}
            {/* TODO: need error component */}
        </>
    );
}

export default Upload;
