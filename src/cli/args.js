const parseArgs = () => {
    let result = [];
    let args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
        if (args[i].startsWith('--')) {
            result.push(`${args[i]} is ${args[i + 1]}`);
        }
    }
    console.log(result.join(', '));
};

parseArgs();