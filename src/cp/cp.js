import { spawn } from 'child_process';
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const spawnChildProcess = async (args) => {
    const childProcess = spawn(
        'node',
        [
            join(dirname(fileURLToPath(import.meta.url)), 'files', 'script.js'),
            ...args
        ]
    );
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

spawnChildProcess(['someArgument1', 'someArgument2']);
