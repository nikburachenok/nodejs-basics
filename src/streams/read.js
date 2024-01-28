import fs from 'fs';

const FILE_PATH = 'src/streams/files/fileToRead.txt';

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