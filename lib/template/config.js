const defaultConfig = require('../config.js');

const project = 'PROJECT_NAME';

const config = Object.assign(defaultConfig, {
    version: '0.0.1',
    serverProtocol: 'http://',
    // httptype: 1, // ws
    home: `home/project/${project}/home.vue`,
    page: `home/project/${project}/page`,
    components: {},
    assets: {},
    showCallHelpComp: false,
    bottomHasNav: true,
    showWelcome: false,
    pageW: 1536,
    pageH: 1740,
    scss: {
        home: '',
        gif: '',
    },
    copy: {
        path: [`assets/${project}`],
    }
});

module.exports = config;