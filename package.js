Package.describe({
    name: 'koleok:ss-activewear-api',
    summary: "SS-Activewear garment supplier API wrapper for meteor",
    version: "1.0.0",
    git: "https://github.com/Koleok/ss-activewear-api"
});

Npm.depends({});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@0.9.3.1');

    api.use(
        ['underscore', 'ecmascript'], ['client', 'server']
    );

    api.addFiles(
        ['client.js', 'server.js', 'SS_Api.js']
    );

    api.export(
        ['SS_Api'], ['client', 'server']
    );
});