const parseEnv = () => {
    console.log(
        Object.keys(process.env)
            .filter(item => item.includes('RSS_'))
            .map(item => {
                return `${item}=${process.env[item]}`;
            })
            .join('; ')
    );
};

parseEnv();