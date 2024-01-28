import fs from 'fs';

const FILE_PATH = 'src/fs/files/fileToRemove.txt';
const ERROR_MESSAGE = 'FS operation failed';

const remove = async () => {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error(ERROR_MESSAGE);
    }

    fs.unlinkSync(FILE_PATH);
};

await remove();