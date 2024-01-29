import { createUnzip } from 'zlib';
import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress+.txt');
const ARCHIVE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');

const decompress = async () => {
    fs.createReadStream(ARCHIVE_PATH, { header: 'content-encoding' })
        .pipe(createUnzip())
        .pipe(fs.createWriteStream(FILE_PATH))
};

await decompress();