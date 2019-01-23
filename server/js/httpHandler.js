const headers = require('./cors');
const keypressHandler = require('./keypressHandler');
var statusCode;

var responseHandler = function(statusCode, req, res, statusCode) {
  var data = keypressHandler.store;
  statusCode = statusCode || 200;
  res.writeHead(statusCode, headers);

  if (req.url === '/1' && req.method === 'GET') {
    res.end(JSON.stringify(data[0]),()=>{data.splice(0,1)});

  } else if (req.url === '/1' && req.method === 'OPTIONS') {
    res.end();

  } else {
    res.writeHead(404);
    res.end();
  }
}

let handler = (req, res) => {
  if (req.url === '/1' || req.url === '/') {
    responseHandler(keypressHandler.store, req, res, 201);
  } else {
    responseHandler(null, req, res, 404);
  }
};

module.exports = handler;
