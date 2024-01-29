import { Worker } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const FILE_PATH = join(dirname(fileURLToPath(import.meta.url)), 'worker.js');

const performCalculations = async () => {

    let results = [];
    for (let i = 0; i < cpus().length; i++) {
        const worker = new Worker(FILE_PATH, { workerData: 10 + i });
        worker.on("message", (result) => {
            results[i] = { status: "resolved", data: result };
            if (i === cpus().length - 1) {
                console.log(results);
            }
        });
        worker.on("error", () => {
            results[i] = { status: "error", data: null };
            if (i === cpus().length - 1) {
                console.log(results);
            }
        })
    }
};

await performCalculations();