import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');

const read = async () => {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error('FS operation failed');
    }

    console.log(fs.readFileSync(FILE_PATH, 'utf-8'));
};

await read();