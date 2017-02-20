#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const hotjs = require('../src/hotjs');

const cli = meow(`
	Usage
	  $ hotjs <page_number>
	Example
	  $ hotjs 1
	    [angular2] Deploying an i18n Angular app with angular-cli – Medium
        https://medium.com/@feloy/deploying-an-i18n-angular-app-with-angular-cli-fc788f17e358#.emk8f38wj
        
        [javascript] DasSur.ma – DIY Web Animations: Promises + rAF + Transitions
        https://dassur.ma/things/raf-promise/
        
        [javascript] ES6 Features
        https://codetower.github.io/es6-features/
`);

function show(json) {
    json.map(function (x) {
       console.log("[" + chalk.red(x.skill) + "] " + x.title);
       console.log(chalk.gray(x.link));
       console.log();
    });
}

hotjs(cli.input[0]).then(function (json) {
    show(json.docs);
});