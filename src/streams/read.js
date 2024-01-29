import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToRead.txt');

const read = async () => {
    const readableStream = fs.createReadStream(FILE_PATH, 'utf-8');

    readableStream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })
};

await read();