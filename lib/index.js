#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const exec = require('./exec');
const files = require('./files');

const root = process.cwd();
const namespace = process.argv[2];
console.log('create project: ', namespace);
const mod = process.argv[3] || 'newdesign';
const pathArr = [
    {
        template: 'assets',
        target: 'assets',
    },
    {
        template: 'config',
        target: 'config',
    },
    {
        template: 'project',
        target: 'module/home/project',
    },
];

// 由于内网限制无法上传代码，故需用本地路径
const templateConfigPath = `d:\\template\\${mod}\\config`;

// 修改config的项目名字
const configPath = path.join(__dirname, 'template/config.js');
const newConfigPath = path.join(templateConfigPath, 'config.js');

const fileContent = fs.readFileSync(configPath, 'utf-8');
const newContent = fileContent.replace('PROJECT_NAME', namespace);
fs.writeFileSync(newConfigPath, newContent);

// 拷贝模板
pathArr.forEach( item => {
    const { template, target } = item;
    const templatePath = path.join(`d:\\project\\template\\${mod}\\`, template);
    const targetPath = path.join(root, 'src', target, namespace);
    files(templatePath, targetPath);
});
