import { Transform } from 'stream';

const transform = async () => {
    const stream = new Transform({
        transform(chunk, encoding, callback) {
            const reversed = chunk.toString().trim().split('').reverse().join('');
            this.push(reversed + '\n');
            callback();
        }
    })

    process.stdin.pipe(stream).pipe(process.stdout);
};

await transform();