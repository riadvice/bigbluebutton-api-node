var EndMeetingResponse=require('../../src/Responses/EndMeetingResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class EndMeetingResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.end=new EndMeetingResponse(fs.readFileSync('./Data/endMeetingData.xml', 'utf8'));
    }

    testEndMeetingResponseContent()
{   try{
    assert.equal('SUCCESS', this.end.getReturnCode());
    assert.equal('sentEndMeetingRequest', this.end.getMessageKey());
    assert.equal('A request to end the meeting was sent. Please wait a few seconds, and then use the getMeetingInfo or isMeetingRunning API calls to verify that it was ended.', this.end.getMessage());
    console.log('Test End Meeting Response Passed.');
} catch (error) {
    console.error('Test End Meeting Response Failed.');
}
}
}


module.exports=EndMeetingResponseTest;