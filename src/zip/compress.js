import { createGzip } from 'zlib';
import fs from 'fs';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'fileToCompress.txt');
const ARCHIVE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'files', 'archive.gz');

const compress = async () => {
    fs.createReadStream(FILE_PATH, 'utf-8')
        .pipe(createGzip())
        .pipe(fs.createWriteStream(ARCHIVE_PATH));
};

await compress();