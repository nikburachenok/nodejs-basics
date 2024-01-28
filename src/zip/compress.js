import { createGzip } from 'zlib';
import fs from 'fs';

const FILE_PATH = 'src/zip/files/fileToCompress.txt';
const ARCHIVE_PATH = 'src/zip/files/archive.gz'

const compress = async () => {
    fs.createReadStream(FILE_PATH)
        .pipe(createGzip())
        .pipe(fs.createWriteStream(ARCHIVE_PATH));
};

await compress();