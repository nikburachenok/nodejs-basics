import { createHash } from 'crypto';
import fs from 'fs';

const FILE_PATH = 'src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
    console.log(createHash('sha256').update(fs.readFileSync(FILE_PATH, 'utf-8')).digest('hex'))
};

await calculateHash();