import fs from 'fs';

const FILE_PATH = 'src/fs/files/fresh.txt';
const FILE_CONTENT = 'I am fresh and young';
const ERROR_MESSAGE = 'FS operation failed';

const create = async () => {
    if (fs.existsSync(FILE_PATH)) {
        throw new Error(ERROR_MESSAGE);
    }

    fs.writeFileSync(FILE_PATH, FILE_CONTENT, 'utf-8');
};

await create();