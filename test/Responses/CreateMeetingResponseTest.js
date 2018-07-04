var CreateMeetingResponse=require('../../src/Responses/CreateMeetingResponse');
var TestCase=require('../TestCase');
var fs = require('fs');
var assert = require('assert');
class CreateMeetingResponseTest extends TestCase
{       constructor() {
    super();
    this.meeting = new CreateMeetingResponse(fs.readFileSync('D:/workspace/bigbluebutton-api-node/tests/Data/createMeetingData.xml', 'utf8'));
}

   testCreateMeetingResponseContent()
{    try{

    assert.equal('SUCCESS', this.meeting.getReturnCode());
    assert.equal('random-1665177', this.meeting.getMeetingId());
    assert.equal('1a6938c707cdf5d052958672d66c219c30690c47-1524212045514', this.meeting.getInternalMeetingId());
    assert.equal('bbb-none', this.meeting.getParentMeetingId());
    assert.equal('tK6J5cJv3hMLNx5IBePa', this.meeting.getAttendeePassword());
    assert.equal('34Heu0uiZYqCZXX9C4m2', this.meeting.getModeratorPassword());
    assert.equal(1453283819419, this.meeting.getCreationTime());
    assert.equal(76286, this.meeting.getVoiceBridge());
    assert.equal('Wed Jan 20 04:56:59 EST 2016', this.meeting.getCreateDate());
    assert.equal('613-555-1234', this.meeting.getDialNumber());
    assert.equal('false', this.meeting.hasUserJoined());
    assert.equal(20, this.meeting.getDuration());
    assert.equal('false', this.meeting.hasBeenForciblyEnded());
    assert.equal('duplicateWarning', this.meeting.getMessageKey());
    assert.equal('This conference was already in existence and may currently be in progress.', this.meeting.getMessage());
    console.log('Test Create Meeting Response Passed.');
} catch (error) {
    console.error('Test Create Meeting Response Failed.');
}
}

}
module.exports=CreateMeetingResponseTest;