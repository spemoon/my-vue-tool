var execSync = require('child_process').execSync;

module.exports = function exec(cmd) {
    try {
        console.log(cmd);
        var result = execSync(cmd, {stdio: [0, 1, 2]});
        return result;
    } catch (e) {
        throw e;
    }
};