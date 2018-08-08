var GetMeetingsResponse=require('../../src/Responses/GetMeetingsResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class GetMeetingsResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.meetings=new GetMeetingsResponse(fs.readFileSync('./Data/getMeetingsData.xml', 'utf8'));
    }

   testGetMeetingsResponseContent()
{
    try{
    assert.equal('SUCCESS', this.meetings.getReturnCode());
    assert.equal(3, this.meetings.getMeetings().length);
    var aMeeting = this.meetings.getMeetings()[2];
    assert.equal('56e1ae16-3dfc-390d-b0d8-5aa844a25874', aMeeting.getMeetingId());
    assert.equal('Marty Lueilwitz', aMeeting.getMeetingName());
    assert.equal(1453210075799, aMeeting.getCreationTime());
    assert.equal('Tue Jan 19 08:27:55 EST 2016', aMeeting.getCreationDate());
    assert.equal(49518, aMeeting.getVoiceBridge());
    assert.equal('580.124.3937x93615', aMeeting.getDialNumber());
    assert.equal('f~kxYJeAV~G?Jb+E:ggn', aMeeting.getAttendeePassword());
    assert.equal('n:"zWc##Bi.y,d^s,mMF', aMeeting.getModeratorPassword());
    assert.equal('false', aMeeting.getHasBeenForciblyEnded());
    assert.equal('true', aMeeting.getIsRunning());
    assert.equal(5, aMeeting.getParticipantCount());
    assert.equal(2, aMeeting.getListenerCount());
    assert.equal(1, aMeeting.getVoiceParticipantCount());
    assert.equal(3, aMeeting.getVideoCount());
    assert.equal(2206, aMeeting.getDuration());
    assert.equal('true', aMeeting.getHasUserJoined());
    console.log('Test Create Meeting Response Passed.');
} catch (error) {
    console.error('Test Create Meeting Response Failed.');
}
}
}
module.exports=GetMeetingsResponseTest;