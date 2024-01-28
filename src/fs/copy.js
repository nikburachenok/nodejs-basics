import fs from 'fs';

const FOLDER_PATH = 'src/fs/files';
const FOLDER_COPY_PATH = 'src/fs/files_copy';
const ERROR_MESSAGE = 'FS operation failed';

const copy = async () => {
    if (!fs.existsSync(FOLDER_PATH) || fs.existsSync(FOLDER_COPY_PATH)) {
        throw new Error(ERROR_MESSAGE);
    }

    fs.cpSync(FOLDER_PATH, FOLDER_COPY_PATH, { recursive: true });
};

await copy();
