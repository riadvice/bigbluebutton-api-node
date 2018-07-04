var CreateMeetingParameters = require('../src/Parametres/CreateMeetingParametres');
var EndMeetingParameters = require('../src/Parametres/EndMeetingParametres');
var JoinMeetingParameters = require('../src/Parametres/JoinMeetingParametres');
var SetConfigXMLParameters = require('../src/Parametres/SetConfigXMLParametres');
var UpdateRecordingsParameters = require('../src/Parametres/UpdateRecordingsParametres');
// var CreateMeetingResponse = require('../src/Responses/CreateMeetingResponse');
// var UpdateRecordingsResponse = require('../src/Responses/UpdateRecordingsResponse');
var Faker= require('faker');




class TestCase
{
    constructor(){
        this.faker = Faker;
    }


    createRealMeeting(bbb)
{
    var createMeetingParams = this.generateCreateParams();
    var createMeetingMock   = this.getCreateMock(createMeetingParams);
    return bbb.createMeeting(createMeetingMock);
}

    generateCreateParams()
{
    return {
        "meetingName": this.faker.name.firstName(),
        "meetingId": this.faker.random.uuid(),
        "attendeePassword": this.faker.internet.password(),
        "moderatorPassword": this.faker.internet.password(),
        "autoStartRecording": this.faker.random.boolean(),
        "dialNumber": this.faker.phone.phoneNumber(),
        "voiceBridge": this.faker.random.number(5),
        "webVoice": this.faker.random.word(),
        "logoutUrl": this.faker.internet.url(),
        "maxParticipants": this.faker.random.number(2, 100),
        "record": this.faker.random.boolean(),
        "duration": this.faker.random.number(0, 6000),
        "welcomeMessage": this.faker.lorem.sentence(),
        "allowStartStopRecording": this.faker.random.boolean(),
        "moderatorOnlyMessage": this.faker.lorem.sentence(),
        "meta_presenter": this.faker.name.findName(),
        "webcamsOnlyForModerator": this.faker.random.boolean(),
        "logo": this.faker.image.imageUrl(330,70,"people"),
        "copyright": this.faker.lorem.text(),
        "muteOnStart": this.faker.random.boolean()
    };
}

    getCreateMock(params)
{
    var createMeetingParams = new CreateMeetingParameters(params.meetingId, params.meetingName);
    createMeetingParams.setAttendeePassword(params.attendeePassword);
    createMeetingParams.setModeratorPassword(params.moderatorPassword);
    createMeetingParams.setDialNumber(params.dialNumber);
    createMeetingParams.setVoiceBridge(params.voiceBridge);
    createMeetingParams.setWebVoice(params.webVoice);
    createMeetingParams.setLogoutUrl(params.logoutUrl);
    createMeetingParams.setMaxParticipants(params.maxParticipants);
    createMeetingParams.setRecord(params.record);
    createMeetingParams.setDuration(params.duration);
    createMeetingParams.setWelcomeMessage(params.welcomeMessage);
    createMeetingParams.setAutoStartRecording(params.autoStartRecording);
    createMeetingParams.setAllowStartStopRecording(params.allowStartStopRecording);
    createMeetingParams.setModeratorOnlyMessage(params.moderatorOnlyMessage);
    createMeetingParams.setWebcamsOnlyForModerator(params.webcamsOnlyForModerator);
    createMeetingParams.setLogo(params.logo);
    createMeetingParams.setCopyright(params.copyright);
    createMeetingParams.setMuteOnStart(params.muteOnStart);
    createMeetingParams.addMeta('presenter', params.meta_presenter);
    return createMeetingParams;
}

   generateJoinMeetingParams()
{
    return {'meetingId'    : this.faker.random.uuid(),
    'userName'     : this.faker.name.firstName(),
    'password'     : this.faker.internet.password(),
    'userId'       : this.faker.random.number(1, 1000),
    'webVoiceConf' : this.faker.random.word(),
    'creationTime' : this.faker.date.soon
};
}

    getJoinMeetingMock(params)
{
    var joinMeetingParams = new JoinMeetingParameters(params.meetingId, params.userName, params.password);
    joinMeetingParams.setUserId(params.userId);
    joinMeetingParams.setWebVoiceConf(params.webVoiceConf);
    joinMeetingParams.setCreationTime(params.creationTime);

    return joinMeetingParams;
}
   generateEndMeetingParams()
{
    return {'meetingId' : this.faker.random.uuid(),
    'password'  : this.faker.internet.password()};
}
getEndMeetingMock(params)
{
    return new EndMeetingParameters(params.meetingId, params.password);
}
    updateRecordings(bbb)
{
    updateRecordingsParams = this.generateUpdateRecordingsParams();
    updateRecordingsMock   = this.getUpdateRecordingsParamsMock(updateRecordingsParams);
    return bbb.updateRecordings(updateRecordingsMock);
}

   generateUpdateRecordingsParams()
{
    return {
        'recordingId'    : this.faker.random.uuid(),
    'meta_presenter' : this.faker.name.firstName()};
}
   getUpdateRecordingsParamsMock(params)
{
    var updateRecordingsParams = new UpdateRecordingsParameters(params.recordingId);
    updateRecordingsParams.addMeta('presenter', params.meta_presenter);
    return updateRecordingsParams;
}
   generateSetConfigXMLParams()
{
    return {
        'meetingId' : this.faker.random.uuid()
};
}
    getSetConfigXMLMock(params)
{
    var setConfigXMLParams = new SetConfigXMLParameters(params.meetingId);
    return setConfigXMLParams;
}

}
module.exports=TestCase;