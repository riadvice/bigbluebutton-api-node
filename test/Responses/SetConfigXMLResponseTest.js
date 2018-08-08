var SetConfigXMLResponse=require('../../src/Responses/SetConfigXMLResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class SetConfigXMLResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.config=new SetConfigXMLResponse(fs.readFileSync('./Data/setConfigXmlData.xml', 'utf8'));
    }

    testSetConfigXMLResponseContent()
{
    try{
    assert.equal('SUCCESS', this.config.getReturnCode());
    assert.equal('TETDApIC', this.config.getToken());

    console.log('Test XML config Response Passed.');
} catch (error) {
    console.error('Test XML config Response Failed.');
}
}

}
module.exports=SetConfigXMLResponseTest;