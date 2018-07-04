var JoinMeetingResponse=require('../../src/Responses/joinMeetingResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class JoinMeetingResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.joinMeeting=new JoinMeetingResponse(fs.readFileSync('D:/workspace/bigbluebutton-api-node/tests/Data/joinMeetingData.xml', 'utf8'));
    }

   testJoinMeetingResponseContent()
{   try{
    assert.equal('SUCCESS', this.joinMeeting.getReturnCode());
    assert.equal('successfullyJoined', this.joinMeeting.getMessageKey());
    assert.equal('You have joined successfully.', this.joinMeeting.getMessage());
    assert.equal('fa51ae0c65adef7fe3cf115421da8a6a25855a20-1464618262714', this.joinMeeting.getMeetingId());
    assert.equal('ao6ehbtvbmhz', this.joinMeeting.getUserId());
    assert.equal('huzbpgthac7s', this.joinMeeting.getAuthToken());
    assert.equal('rbe7bbkjzx5mnoda', this.joinMeeting.getSessionToken());
    console.log('Test Join Meeting Response Passed.');
} catch (error) {
    console.error('Test Join Meeting Response Failed.');
}
}

}
module.exports=JoinMeetingResponseTest;