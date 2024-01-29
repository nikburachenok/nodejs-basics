import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToWrite.txt');

const write = async () => {
    const stream = fs.createWriteStream(FILE_PATH, { flags: 'a' });

    stream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
    process.stdin.on("data", content => {
        stream.write(content.toString());
    });
};

await write();