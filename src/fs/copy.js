import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FOLDER_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files');
const FOLDER_COPY_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files_copy');

const copy = async () => {
    if (!fs.existsSync(FOLDER_PATH) || fs.existsSync(FOLDER_COPY_PATH)) {
        throw new Error('FS operation failed');
    }

    fs.cpSync(FOLDER_PATH, FOLDER_COPY_PATH, { recursive: true });
};

await copy();
