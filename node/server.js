#!/usr/bin/env node
// From Getting Started with node.js and socket.io
// http://codehenge.net/blog/2011/12/getting-started-with-node-js-and-socket-io-v0-7-part-2
// This is a simple server for the various web frontends
'use strict';

var port = 9090, // Port on which to listen 
    http = require('http'),
    url = require('url'),
    fs = require('fs'),
    b = require('bonescript');
    
var server = http.createServer(servePage);
server.listen(port);
console.log('Listening on ' + port);
function servePage(req, res) {
    var path = url.parse(req.url).pathname;
fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            return send404(res);
        }
        res.write(data, 'utf8');
            res.end();
        });
}

function send404(res) {
    res.writeHead(404);
    res.write('404 - page not found');
    res.end();
}
