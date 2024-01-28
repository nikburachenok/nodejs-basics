import fs from 'fs';

const FOLDER_PATH = 'src/fs/files';
const ERROR_MESSAGE = 'FS operation failed';

const list = async () => {
    if (!fs.existsSync(FOLDER_PATH)) {
        throw new Error(ERROR_MESSAGE);
    }

    fs.readdirSync(FOLDER_PATH).forEach(item => {
        console.log(item);
    });
};

await list();