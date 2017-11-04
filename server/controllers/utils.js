var headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'application/json'
};

exports.sendResponse = function(response, data, statusCode) {
  statusCode = statusCode || 200;
  // var data = callback();
  // console.log('Send response data ', data); // not able to retrieve data bc async
  // console.log('Send response data stringified ', JSON.stringify(data));
  response.writeHead(statusCode, headers);
  response.end(JSON.stringify(data));
};

exports.collectData = function(request, callback) {
  console.log('inside collectData');
  // console.log('REQUEST ', request);
  // var data = '';
  // request.on('data', function(chunk) {
  //   data += chunk;
  //   console.log('CHUNK BEFORE END ', chunk);
  // });
  // request.on('end', function() {
  //   console.log('DATA ', data);
  //   callback(JSON.parse(data));
  // });
  var data = request.body;
  console.log('DATA ', data);
  callback(data);
};

exports.makeActionHandler = function(actionMap) {
  return function(request, response) {
    var action = actionMap[request.method];
    if (action) {
      action(request, response);
    } else {
      exports.sendResponse(response, '', 404);
    }
  };
};
