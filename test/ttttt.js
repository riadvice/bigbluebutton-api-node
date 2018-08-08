var BigBlueButtonTest =require('./BigBlueButtonTest');
var getenv = require('getenv');
var TestCase=require('./TestCase');
// var Curl = require('node-libcurl').Curl;
var CreateMeetingParametres = require('../src/Parametres/CreateMeetingParametres');
process.env.BBB_SECURITY_SALT= '8cd8ef52e8e101574e400365b55e11a6';
process.env.BBB_SERVER_BASE_URL = 'http://test-install.blindsidenetworks.com/bigbluebutton/';
var test = new BigBlueButtonTest();
var t = new TestCase();
test.testCreateMeetingWithDocumentUrl();

/////

// var Curl = require('node-libcurl').Curl,
//     querystring = require('querystring');
//
// var curl = new Curl(),
//     url = 'http://www.example.com',
//     data = '<response>\n' +
//         '<returncode>SUCCESS</returncode>\n' +
//         '<version>1.0</version>\n' +
//         '</response>';
//
// //You need to build the query string,
// // node has this helper function, but it's limited for real use cases (no support for array values for example)
//
//
// curl.setOpt(Curl.option.URL, url);
// curl.setOpt(Curl.option.POSTFIELDS, data);
// curl.setOpt(Curl.option.HTTPHEADER, ['Content-Type: text/xml']);
// curl.setOpt(Curl.option.VERBOSE, true);
//
// console.log('data : '+data);
//
// curl.perform();
//
// curl.on('end', function(statusCode, body) {
//     console.log(body);
//
//     this.close();
// });
//
// curl.on('error', curl.close.bind(curl));



