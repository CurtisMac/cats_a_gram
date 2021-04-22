import React, { useState, useEffect } from "react";
import uploadImage from "../adaptors/uploadImg";
import { Redirect } from "react-router-dom";

//components
import FileSelector from "../components/upload/FileSelector";

function Upload() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [file, setFile] = useState(null);

    useEffect(() => {
        async function uploadFile() {
            try {
                setLoading(true);
                const formdata = new FormData();
                formdata.append("file", file, "file");
                await uploadImage(formdata);
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
            {loading && <Loading />}
            {success && <Redirect to="/" />}
            {/* TODO: need error component */}
        </>
    );
}

function Loading() {
    return <div>Loading</div>;
}

export default Upload;
