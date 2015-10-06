Package.describe({
    name: 'koleok:ss-activewear-api',
    summary: "SS-Activewear garment supplier API wrapper for meteor",
    version: "1.0.0",
    git: "https://github.com/Koleok/ss-activewear-api",
    documentation: "README.md"
});

Package.onUse(function (api) {
    // Meteor releases below this version are not supported
    api.versionsFrom("1.2.0.1");

    // Core packages and 3rd party packages
    api.use(
        ['underscore', 'ecmascript', 'http'], ['client', 'server']
    );

    // The files of this package
    api.addFiles('client.js', 'client');
    api.addFiles('server.js', 'server');

    // The variables that become global for users of your package
    api.export('ss');
});