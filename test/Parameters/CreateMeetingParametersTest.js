var assert = require('assert');
var TestCase=require('../TestCase');

class CreateMeetingParametersTest extends TestCase
{
    testCreateMeetingParameters()
{
    var params              = super.generateCreateParams();
    var createMeetingParams = super.getCreateMock(params);


    try{
    assert.equal(params.meetingName, createMeetingParams.getMeetingName());
    assert.equal(params.meetingId, createMeetingParams.getMeetingId());
    assert.equal(params.attendeePassword, createMeetingParams.getAttendeePassword());
    assert.equal(params.moderatorPassword, createMeetingParams.getModeratorPassword());
    assert.equal(params.autoStartRecording, createMeetingParams.getIsAutoStartRecording());
    assert.equal(params.dialNumber, createMeetingParams.getDialNumber());
    assert.equal(params.voiceBridge, createMeetingParams.getVoiceBridge());
    assert.equal(params.webVoice, createMeetingParams.getWebVoice());
    assert.equal(params.logoutUrl, createMeetingParams.getLogoutUrl());
    assert.equal(params.maxParticipants, createMeetingParams.getMaxParticipants());
    assert.equal(params.record, createMeetingParams.getIsRecorded());
    assert.equal(params.duration, createMeetingParams.getDuration());
    assert.equal(params.welcomeMessage, createMeetingParams.getWelcomeMessage());
    assert.equal(params.allowStartStopRecording, createMeetingParams.getIsAllowStartStopRecording());
    assert.equal(params.moderatorOnlyMessage, createMeetingParams.getModeratorOnlyMessage());
    assert.equal(params.webcamsOnlyForModerator, createMeetingParams.getIsWebcamsOnlyForModerator());
    assert.equal(params.logo, createMeetingParams.getLogo());
    assert.equal(params.copyright, createMeetingParams.getCopyright());
    assert.equal(params.muteOnStart, createMeetingParams.getIsMuteOnStart());
    assert.equal(params.meta_presenter, createMeetingParams.getMeta('presenter'));
        console.log('Test Create Meeting Passed.');
    } catch (error) {
        console.error('Test Create Meeting Failed.');
    }
    // Test setters

    var newId=this.faker.random.uuid();
    var newName=  this.faker.name.firstName();
        try{
    createMeetingParams.setMeetingId(newId);
    createMeetingParams.setMeetingName(newName);
    assert.equal(newName, createMeetingParams.getMeetingName());
    assert.equal(newId, createMeetingParams.getMeetingId());
            console.log('Test setters Create Meeting Passed.');
        } catch (error) {
            console.error('Test setters Create Meeting Failed.');
        }
}
}
module.exports=CreateMeetingParametersTest;