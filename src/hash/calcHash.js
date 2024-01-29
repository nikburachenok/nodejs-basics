import { createHash } from 'crypto';
import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
    const readableStream = fs.createReadStream(FILE_PATH, 'utf-8');
    readableStream.on('data', (chunk) => {
        console.log(createHash('sha256').update(chunk).digest('hex'));
    })
};

await calculateHash();