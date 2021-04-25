import React from "react";
import { DropzoneAreaBase } from "material-ui-dropzone";

function FileSelector({ setFile }) {
    return (
        <div>
            <DropzoneAreaBase acceptedFiles={['image/jpeg, image/png']} onAdd={(files) => setFile(files[0].file)} />
        </div>
    );
}

export default FileSelector;
