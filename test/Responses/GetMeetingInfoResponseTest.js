var GetMeetingInfoResponse=require('../../src/Responses/GetMeetingInfoResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class GetMeetingInfoResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.meetingInfo=new GetMeetingInfoResponse(fs.readFileSync('./Data/getInfoMeetingData.xml', 'utf8'));
    }

    testGetMeetingInfoResponseContent()
{
    try{
    // $this->assertInstanceOf('BigBlueButton\Core\MeetingInfo', $this->meetingInfo->getMeetingInfo());

    assert.equal(2, this.meetingInfo.getAttendees().length);
    assert.equal('SUCCESS', this.meetingInfo.getReturnCode());
    var info = this.meetingInfo.getMeetingInfo();
    assert.equal('Mock meeting for testing getMeetingInfo API method', info.getMeetingName());
    assert.equal('117b12ae2656972d330b6bad58878541-28-15', info.getMeetingId());
    assert.equal('178757fcedd9449054536162cdfe861ddebc70ba-1453206317376', info.getInternalMeetingId());
    assert.equal(1453206317376, info.getCreationTime());
    assert.equal('Tue Jan 19 07:25:17 EST 2016', info.getCreationDate());
    assert.equal(70100, info.getVoiceBridge());
    assert.equal('613-555-1234', info.getDialNumber());
    assert.equal('dbfc7207321527bbb870c82028', info.getAttendeePassword());
    assert.equal('4bfbbeeb4a65cacaefe3676633', info.getModeratorPassword());
    assert.equal('true', info.getIsRunning());
    assert.equal(20, info.getDuration());
    assert.equal('true', info.getHasUserJoined());
    assert.equal('true', info.getIsRecording());
    assert.equal('false', info.getHasBeenForciblyEnded());
    assert.equal(1453206317380, info.getStartTime());
    assert.equal(1453206325002, info.getEndTime());
    assert.equal(2, info.getParticipantCount());
    assert.equal(1, info.getListenerCount());
    assert.equal(2, info.getVoiceParticipantCount());
    assert.equal(1, info.getVideoCount());
    assert.equal(20, info.getMaxUsers());
    assert.equal(2, info.getModeratorCount());
        console.log('Test Meeting Info Response Passed.');
    } catch (error) {
        console.error('Test Meeting Info Response Failed.');
    }
}
    testMeetingAttendeeContent()
{
    var anAttendee = this.meetingInfo.getAttendees()[1];

    try{
    assert.equal('xi7y7gpmyq1g', anAttendee.getUserId());
    assert.equal('Barrett Kutch', anAttendee.getFullName());
    assert.equal('MODERATOR', anAttendee.getRole());
    assert.equal('false', anAttendee.getIsPresenter());
    assert.equal('false', anAttendee.getIsListeningOnly());
    assert.equal('true', anAttendee.getHasJoinedVoice());
    assert.equal('false', anAttendee.getHasVideo());
    assert.equal(2, this.meetingInfo.getAttendees().length);
    console.log('Test Attendee Content Response Passed.');
} catch (error) {
    console.error('Test Attendee Content Response Failed.');
}
}

}
module.exports=GetMeetingInfoResponseTest;