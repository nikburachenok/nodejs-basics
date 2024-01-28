import fs from 'fs';

const FILE_PATH = 'src/fs/files/fileToRead.txt';
const ERROR_MESSAGE = 'FS operation failed';

const read = async () => {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error(ERROR_MESSAGE);
    }

    console.log(fs.readFileSync(FILE_PATH, 'utf-8'));
};

await read();