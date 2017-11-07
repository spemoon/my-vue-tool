#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const exec = require('./exec');

const root = process.cwd();
const namespace = process.argv[2];
console.log('create project: ', namespace);

// const templateAssetsPath = path.join(__dirname, 'template/assets');
// const templateConfigPath = path.join(__dirname, 'template/config');
// const templateProjectPath = path.join(__dirname, 'template/project');
// 由于内网限制无法上传代码，故需用本地路径
const templateAssetsPath = 'd:\\template\\newdesign\\assets';
const templateConfigPath = 'd:\\template\\newdesign\\config';
const templateProjectPath = 'd:\\template\\newdesign\\project';

const targetAssetsPath = path.join(root, 'src/assets', namespace);
const targetConfigPath = path.join(root, 'src/config', namespace);
const targetProjectPath = path.join(root, 'src/module/home/project', namespace);

// 修改config的项目名字
const configPath = path.join(__dirname, 'template/config.js');
const newConfigPath = path.join(templateConfigPath, 'config.js');
console.log(newConfigPath);

const fileContent = fs.readFileSync(configPath, 'utf-8');
const newContent = fileContent.replace('PROJECT_NAME', namespace);
fs.writeFileSync(newConfigPath, newContent);

// 生成目录
if (fs.existsSync(targetAssetsPath)) {
    throw `${targetAssetsPath} 目录已存在`;
} else {
    exec(`mkdir ${targetAssetsPath}`);
    exec(`xcopy ${templateAssetsPath} ${targetAssetsPath} /s /e /y /i /d`);
}

if (fs.existsSync(targetConfigPath)) {
    throw `${targetConfigPath} 目录已存在`;
} else {
    exec(`mkdir ${targetConfigPath}`);
    exec(`xcopy ${templateConfigPath} ${targetConfigPath} /s /e /y /i /d`);
}

if (fs.existsSync(targetProjectPath)) {
    throw `${targetProjectPath} 目录已存在`;
} else {
    exec(`mkdir ${targetProjectPath}`);
    exec(`xcopy ${templateProjectPath} ${targetProjectPath} /s /e /y /i /d`);
}