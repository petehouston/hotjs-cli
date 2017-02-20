'use strict';
var querystring = require('querystring');
var fetch = require('isomorphic-fetch');
var HOTJS_API = "https://api.hotjs.net/skills/all/resources";

function hotjs(page) {
    const targetPage = page || 1;

    const url = HOTJS_API + '?' + querystring.stringify({ page: targetPage });

    const promise = new Promise(function (resolve, reject) {
        fetch(url).then(function(response) {
            resolve(response.json());
        }).catch(function (err) {
            reject(err);
        });
    });
    return promise;
}

module.exports = hotjs;