var ApiVersionResponse=require('../../src/Responses/ApiVersionResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');

class ApiVersionResponseTest extends TestCase
{
    constructor()
    {
        super();

        this.version=new ApiVersionResponse(fs.readFileSync('D:/workspace/bigbluebutton-api-node/tests/Data/versionData.xml', 'utf8'));
    }

    testApiVersionResponseContent()
{    try{
    assert.equal('SUCCESS', this.version.getReturnCode());
    assert.equal('2.0', this.version.getVersion());
    console.log('Test Version Response Passed.');
} catch (error) {
    console.error('Test Version Response Failed.');
}
}

}
module.exports=ApiVersionResponseTest;