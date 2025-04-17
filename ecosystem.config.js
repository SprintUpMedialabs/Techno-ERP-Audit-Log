module.exports = {
    apps: [
        {
            name: "techno-log-uat",
            script: "dist/index.js",
            env: {
                NODE_ENV: "uat",
            },
        },
        {
            name: "techno-log-prod",
            script: "dist/index.js",
            env: {
                NODE_ENV: "production",
            },
        }
    ]
};
