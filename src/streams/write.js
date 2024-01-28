import fs from 'fs';

const FILE_PATH = 'src/streams/files/fileToWrite.txt';

const write = async () => {
    const stream = fs.createWriteStream(FILE_PATH, { flags: 'a' });

    stream.on('error', function (error) {
        console.log(`error: ${error.message}`);
    })
    process.stdin.on("data", content => {
        content = content.toString();
        stream.write(content);
    });
};

await write();