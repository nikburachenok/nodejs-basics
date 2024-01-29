import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'wrongFilename.txt');
const RENAMED_FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'properFilename.md');

const rename = async () => {
    if (!fs.existsSync(FILE_PATH) || fs.existsSync(RENAMED_FILE_PATH)) {
        throw new Error('FS operation failed');
    }

    fs.renameSync(FILE_PATH, RENAMED_FILE_PATH);
};

await rename();