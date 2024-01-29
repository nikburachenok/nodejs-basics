import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FOLDER_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files');

const list = async () => {
    if (!fs.existsSync(FOLDER_PATH)) {
        throw new Error('FS operation failed');
    }

    fs.readdirSync(FOLDER_PATH).forEach(item => {
        console.log(item);
    });
};

await list();