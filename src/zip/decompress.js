import { createGzip } from 'zlib';
import fs from 'fs';

const FILE_PATH = 'src/zip/files/fileToCompress.txt';
const ARCHIVE_PATH = 'src/zip/files/archive.gz'

const decompress = async () => {
    fs.createReadStream(ARCHIVE_PATH)
        .pipe(createGzip())
        .pipe(fs.createWriteStream(FILE_PATH))
};

await decompress();