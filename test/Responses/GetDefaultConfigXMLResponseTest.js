var GetDefaultConfigXMLResponse=require('../../src/Responses/GetDefaultConfigXMLResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class GetDefaultConfigXMLResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.version=new GetDefaultConfigXMLResponse(fs.readFileSync('D:/workspace/bigbluebutton-api-node/tests/Data/defaultConfigXmlData.xml', 'utf8'));
    }

    testEndMeetingResponseContent()
{
    // assert.equal('SUCCESS', this.configXml.getRawXml()->asXML());
    // valid XML
}
}
module.exports=GetDefaultConfigXMLResponseTest;