import fs from 'fs';

const FILE_PATH = 'src/fs/files/wrongFilename.txt';
const RENAMED_FILE_PATH = 'src/fs/files/properFilename.md';
const ERROR_MESSAGE = 'FS operation failed';

const rename = async () => {
    if (!fs.existsSync(FILE_PATH) || fs.existsSync(RENAMED_FILE_PATH)) {
        throw new Error(ERROR_MESSAGE);
    }

    fs.renameSync(FILE_PATH, RENAMED_FILE_PATH);
};

await rename();