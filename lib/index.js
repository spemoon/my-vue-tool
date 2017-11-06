const path = require('path');
const fs = require('fs');
const exec = require('./exec');

const root = process.cwd();
const namespace = process.argv[2];
console.log(namespace);

const templateAssetsPath = path.join(__dirname, 'template/assets');
const templateConfigPath = path.join(__dirname, 'template/config');
const templateProjectPath = path.join(__dirname, 'template/project');

const targetAssetsPath = path.join(root, 'src/assets', namespace);
const targetConfigPath = path.join(root, 'src/config', namespace);
const targetProjectPath = path.join(root, 'src/module/home/project', namespace);

// 生成目录
if (fs.existsSync(targetAssetsPath)) {
    throw `${targetAssetsPath} 目录已存在`;
} else {
    exec(`mkdir ${targetAssetsPath}`);
    exec(`xcopy ${templateAssetsPath} ${targetAssetsPath} /s /y /i /d`);
}

if (fs.existsSync(targetConfigPath)) {
    throw `${targetConfigPath} 目录已存在`;
} else {
    exec(`mkdir ${targetConfigPath}`);
    exec(`xcopy ${templateConfigPath} ${targetConfigPath} /s /y /i /d`);
}

if (fs.existsSync(targetProjectPath)) {
    throw `${targetProjectPath} 目录已存在`;
} else {
    exec(`mkdir ${targetProjectPath}`);
    exec(`xcopy ${templateProjectPath} ${targetProjectPath} /s /y /i /d`);
}