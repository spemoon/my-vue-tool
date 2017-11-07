#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const exec = require('./exec');
const files = require('./files');

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

const fileContent = fs.readFileSync(configPath, 'utf-8');
const newContent = fileContent.replace('PROJECT_NAME', namespace);
fs.writeFileSync(newConfigPath, newContent);

// 拷贝模板
files(templateAssetsPath, targetAssetsPath);
files(templateConfigPath, targetConfigPath);
files(templateProjectPath, targetProjectPath);
