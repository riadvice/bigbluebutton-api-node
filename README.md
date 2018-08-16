# Bigbluebutton API for Node.js
Bigbluebutton API for Node.js is a unit testing library for Node.js, makes easy for developers to use BigBlueButton API.

##Installation

- Clone / download bigbluebutton-api-node from github, then:


- Install dependencies:
````
npm install
````
- Install development dependencies:
````
npm install --production
````

##Usage

You should have environment variables BBB_SECURITY_SALT and BBB_SERVER_BASE_URL defined in your sever. 


Then you will be able to call BigBlueButton API of your server. A simple usage example for Testing API version looks like:
````
var BigBlueButton =require('./BigBlueButton');
 
var bbb = new BigBlueButton();
var createMeetingParams = new CreateMeetingParameters(params.meetingID, params.meetingName);
bbb.createMeeting(callback,createMeetingParams);
function callback(err,obj)
{
    if(err){
        console.log(err);
    }else{
        try{
            console.log('Created Meeting with ID: " . obj.getMeetingId()');
        }catch (error) {
            console.log('Create Meeting Failed.');
        }}
};
````

##Example

#####Get Meetings
````
var BigBlueButton = require('./BigBlueButton');

var bbb = new BigBlueButton();
bbb.getMeetings(callback);

function callback(err,obj)
{
    if(err){
        console.log(err);
    }else{
        try{
            console.log(obj.getMeetings());
        }catch (error) {
            console.log(error);
        }}
};

````

#####Create Meeting

````
var BigBlueButton           =require('./BigBlueButton');
var CreateMeetingParameters = require('./Parametres/CreateMeetingParametres');

var bbb                 = new BigBlueButton();
var createMeetingParams = new CreateMeetingParameters(params.meetingID, params.meetingName);
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

bbb.createMeeting(callback,createMeetingParams);

function callback(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{
            assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Meeting Created.');
        }catch (error) {
            console.log('Create Meeting Failed.');
        }}
};
````

#####Join Meeting

````
var BigBlueButton          =require('./BigBlueButton');
var JoinMeetingParameters = require('./Parametres/JoinMeetingParametres');

var bbb               = new BigBlueButton();
var joinMeetingParams = new JoinMeetingParameters(params.meetingId, params.userName, params.password);
joinMeetingParams.setUserId(params.userId);
joinMeetingParams.setWebVoiceConf(params.webVoiceConf);
joinMeetingParams.setCreationTime(params.creationTime);

bbb.joinMeeting(callback,joinMeetingParams)

function callback(err,obj)
{
    if(err){
        console.log(err);
    }else{      
            console.log('Join Meeting passed.');
        }
};

````

#####Close Meeting

````
var BigBlueButton        =require('./BigBlueButton');
var EndMeetingParametres = require('./Parametres/EndMeetingParametres');

var bbb       = new BigBlueButton();
var endParams = new EndMeetingParameters(params.meetingID, params.password);
bbb.endMeeting(callback,endParams);

function callback(err,obj)
{
    if(err){
        console.log(err);
    }else{
        console.log('Meeting Ended.');
       }
};
````

#####Get Meeting Info

````
var BigBlueButton           =require('./BigBlueButton');
var CreateMeetingParameters = require('./Parametres/CreateMeetingParametres');

var bbb                 = new BigBlueButton();
var createMeetingParams = new CreateMeetingParameters(params.meetingID, params.meetingName);
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

bbb.createMeeting(callback,createMeetingParams);

function callback(err,obj)
{
    if(err){
        console.log(err);
    }else {

        var btt= new BigBlueButtonTest();

        btt.bbb.getMeetingInfo(GetMeetingInfo,new GetMeetingInfoParameters(obj.getMeetingId(), obj.getModeratorPassword()));

    }
};
function  GetMeetingInfo(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test Get Meetings Passed.');
        }catch (error) {
            console.log('Test Get Meetings failed.');
        }}
};
````

#####Get Recordings

````
var BigBlueButton           =require('./BigBlueButton');
var GetRecordingsParameters = require('./Parametres/GetRecordingsParameters');

var bbb = new BigBlueButton();
bbb.getRecordings(callback,new GetRecordingsParameters());

function callback(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test Get Recordings Passed.');
        }catch (error) {
            console.log('Test Get Recordings failed.');
        }}
};

````

#####Delete Recording

````
var BigBlueButton              = require('./BigBlueButton');
var DeleteRecordingsParameters = require('./Parametres/DeleteRecordingsParametres');

var bbb = new BigBlueButton();
bbb.deleteRecordings(callback,new DeleteRecordingsParameters(recordingId));

function callback(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal('FAILED', obj.getReturnCode());
            console.log('Test Delete Recordings Passed.');
        }catch (error) {
            console.log('Test Delete Recordings failed.');
        }}
};

````


