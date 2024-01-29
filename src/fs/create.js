import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fresh.txt');

const create = async () => {
    if (fs.existsSync(FILE_PATH)) {
        throw new Error('FS operation failed');
    }

    fs.writeFileSync(FILE_PATH, 'I am fresh and young', 'utf-8');
};

await create();