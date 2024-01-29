import { createHash } from 'crypto';
import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    console.log(createHash('sha256').update(fs.readFileSync(FILE_PATH, 'utf-8')).digest('hex'));
};

await calculateHash();