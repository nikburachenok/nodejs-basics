import { spawn } from 'child_process';

const FILE_PATH = 'src/cp/files/script.js';

const spawnChildProcess = async (args) => {
    const childProcess = spawn('node', [FILE_PATH, ...args]);
    process.stdin.pipe(childProcess.stdin);
    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data);
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
