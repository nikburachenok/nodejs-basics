import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRemove.txt');

const remove = async () => {
    if (!fs.existsSync(FILE_PATH)) {
        throw new Error('FS operation failed');
    }

    fs.unlinkSync(FILE_PATH);
};

await remove();