var IsMeetingRunningResponse=require('../../src/Responses/IsMeetingRunningResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class IsMeetingRunningResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.running=new IsMeetingRunningResponse(fs.readFileSync('D:/workspace/bigbluebutton-api-node/tests/Data/isMeetingRunningData.xml', 'utf8'));
    }

    testIsMeetingRunningResponseContent()
{
    try{
    assert.equal('SUCCESS', this.running.getReturnCode());
    assert.equal('true', this.running.isRunning());
    // assert.equal('<?xmlversion="1.0"?><response><returncode>SUCCESS</returncode><running>true</running></response>', this.running.getRawXml()->asXML()));
    console.log('Test Meeting Is Running Response Passed.');
} catch (error) {
    console.error('Test Meeting Is Running Response Failed.');
}
}

}
module.exports=IsMeetingRunningResponseTest;