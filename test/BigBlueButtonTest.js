var TestCase=require('./TestCase');
var BigBlueButton =require('../src/BigBlueButton');
var ApiMethod =require('../src/core/ApiMethod');
var getenv = require('getenv');
var assert = require('assert');
var DeleteRecordingsParameters = require('../src/Parametres/DeleteRecordingsParametres');
var PublishRecordingsParameters = require ('../src/Parametres/PublishRecordingsParametres');
var GetRecordingsParameters = require ('../src/Parametres/GetRecordingsParametres');
var CreateMeetingParametres = require('../src/Parametres/CreateMeetingParametres');
var GetMeetingInfoParameters = require('../src/Parametres/GetMeetingInfoParametres');
var IsMeetingRunningParameters = require('../src/Parametres/IsMeetingRunningParametres');
var EndMeetingParameters = require('../src/Parametres/EndMeetingParametres');
const querystring = require('querystring');
class BigBlueButtonTest extends TestCase{
    constructor()
    {
        super();
        var Env = ['BBB_SECURITY_SALT', 'BBB_SERVER_BASE_URL'];
        for (var i=0 ;i<2;i++) {
            if(!getenv(Env[i]))
            {
                console.log('$_SERVER[\'' + Env[i] + '\'] not set');
            }
        }
         this.bbb = new BigBlueButton();
    }


    testApiVersion()
    {
        this.bbb.getApiVersion(ApiCallback);
    }
    testCreateMeetingUrl()
    {
        var params = super.generateCreateParams();
        var url = this.bbb.getCreateMeetingUrl(super.getCreateMock(params));

        for (const key of Object.keys(params))
        {
            if(typeof(params[key])==="boolean")
            {
                if(params[key])
                {
                    params[key] ='true';
                }
                else{
                    params[key] ='false';
                }
            }

            if(url.indexOf("="+querystring.stringify(params[key]))===-1)
            {
                console.log("Cannot find "+params[key]+" in "+url);

            }

        }

    }

    testCreateMeting(){
        var params = super.generateCreateParams();
        this.bbb.createMeeting(CreateMeeting,super.getCreateMock(params));
    }

    testCreateMeetingWithDocumentUrl()
    {

        var params = super.getCreateMock(super.generateCreateParams());
        params.addPresentation('https://placeholdit.imgix.net/~text?txtsize=96&bg=30406B&txtclr=ffffff&txt=BigBlueButton&w=800&h=600');
      //  console.log('params : '+params);
        this.bbb.createMeeting(CreateMeetingWithDocumentUrl,params);

    }


   testCreateMeetingWithDocumentEmbdded()
    {   var fs = require('fs');
        var params = super.getCreateMock(super.generateCreateParams());
        params.addPresentation('bbb_logo.png',fs.readFileSync('./Data/bbb_logo.png', 'utf8'));
        this.bbb.createMeeting(CreateMeetingWithDocumentEmbdded,params);

    }

    testCreateJoinMeetingUrl()
    {
        var joinMeetingParams = super.generateJoinMeetingParams();
        var joinMeetingMock   = super.getJoinMeetingMock(joinMeetingParams);
        var url = this.bbb.getJoinMeetingURL(joinMeetingMock);
        for (const key of Object.keys(joinMeetingParams))
        {
            if(typeof(joinMeetingParams[key])==="boolean")
            {
                if(joinMeetingParams[key])
                {
                    joinMeetingParams[key] ='true';
                }
                else{
                    joinMeetingParams[key] ='false';
                }
            }

            if(url.indexOf("="+querystring.stringify(joinMeetingParams[key]))===-1)
            {
                console.log("Cannot find "+joinMeetingParams[key]+" in "+url);

            }
        }

    }

    testJoinMeeting()
    {

        var joinMeetingParams = super.generateJoinMeetingParams();
        var joinMeetingMock   = super.getJoinMeetingMock(joinMeetingParams);
        joinMeetingMock.setRedirect(false);
        this.bbb.joinMeeting(empty,joinMeetingMock);

    //     $exception = new \Exception;
        //         $this->expectException(get_class($exception));

    }

     testGetDefaultConfigXMLUrl()
    {
        var url = this.bbb.getDefaultConfigXMLUrl();

        if(url.indexOf(new ApiMethod().SET_CONFIG_XML)===-1)
        {
            console.log("Cannot find "+new ApiMethod().SET_CONFIG_XML+" in "+url);

        }
    }
    testGetDefaultConfigXML()
    {

        this.bbb.getDefaultConfigXML(XmlTestNull);

    }
    testSetConfigXMLUrl()
    {
        var url = this.bbb.setConfigXMLUrl();
        if(url.indexOf(new ApiMethod().SET_CONFIG_XML)===-1)
        {
            console.log("Cannot find "+new ApiMethod().SET_CONFIG_XML+" in "+url);

        }
    }





    testSetConfigXML() {


        var test = new TestCase();
        var params = test.generateCreateParams();
        this.bbb.createMeeting(SetConfigXMLCreateMeeting, super.getCreateMock(params));

        this.bbb.createMeeting(testSetConfigXMLExecuteRequest, super.getCreateMock(params));



    }

    testCreateEndMeetingUrl()
    {
        var params = super.generateEndMeetingParams();
        var url    = this.bbb.getEndMeetingURL(super.getEndMeetingMock(params));
        for (const key of Object.keys(params))
        {
            if(url.indexOf("="+querystring.stringify(params[key]))===-1)
            {
                console.log("Cannot find "+params[key]+" in "+url);

            }
        }

    }

    testEndMeeting()
    {

        var createMeetingParams = super.generateCreateParams();
        var createMeetingMock   = super.getCreateMock(createMeetingParams);
        this.bbb.createMeeting(createEndMeetingtest,createMeetingMock);


    }

    testEndNonExistingMeeting()
    {
        var params = super.generateEndMeetingParams();
        this.bbb.endMeeting(EndNonExistingMeeting,super.getEndMeetingMock(params));

    }

    testIsMeetingRunning()
    {
        this.bbb.isMeetingRunning(IsMeetingRunning,new IsMeetingRunningParameters(this.faker.random.uuid()));

    }
    testGetMeetingsUrl()
    {
        var url =this.bbb.getMeetingsUrl();

        if(url.indexOf(new ApiMethod().GET_MEETINGS)===-1)
        {
            console.log("Cannot find "+new ApiMethod().GET_MEETINGS+" in "+url);

        }

    }

    testGetMeetings()
    {
        this.bbb.getMeetings(GetMeetings);

    }
    testGetMeetingInfoUrl()
    {

        var createMeetingParams = super.generateCreateParams();
        var createMeetingMock   = super.getCreateMock(createMeetingParams);
        this.bbb.createMeeting(createGetMeetingUrl,createMeetingMock);



    }

    testGetMeetingInfo()
    {

        var createMeetingParams = super.generateCreateParams();
        var createMeetingMock   = super.getCreateMock(createMeetingParams);
        this.bbb.createMeeting(createGetMeeting,createMeetingMock);
       }
    testGetRecordingsUrl()
    {
        var url = this.bbb.getRecordingsUrl(new GetRecordingsParameters());
        if(url.indexOf(new ApiMethod().GET_RECORDINGS)===-1)
        {
            console.log("Cannot find "+new ApiMethod().GET_RECORDINGS+" in "+url);

        }
    }


    testGetRecordings()
     {
         // const crypto = require('crypto');
    //
    //     var current_date = (new Date()).valueOf().toString();
    //     var random = Math.random().toString();
    //    var sha1 = crypto.createHash('sha1').update(current_date + random).digest('hex');


       this.bbb.getRecordings(GetRecordings,new GetRecordingsParameters());
    }
    testPublishRecordingsUrl()
    {   const crypto = require('crypto');

        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var sha1 = crypto.createHash('sha1').update(current_date + random).digest('hex');
        var url = this.bbb.getPublishRecordingsUrl(new PublishRecordingsParameters(sha1, true));// date.soon testCase !!
        if(url.indexOf(new ApiMethod().PUBLISH_RECORDINGS)===-1)
        {
            console.log("Cannot find "+new ApiMethod().PUBLISH_RECORDINGS+" in "+url);

        }
    }

    testPublishRecordings()
    {   const crypto = require('crypto');

        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var sha1 = crypto.createHash('sha1').update(current_date + random).digest('hex');
        this.bbb.publishRecordings(PublishRecordings,new PublishRecordingsParameters('non-existing-id-' + sha1, true));

    }
    testDeleteRecordingsUrl()
    {   const crypto = require('crypto');

        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var sha1 = crypto.createHash('sha1').update(current_date + random).digest('hex');
        var url = this.bbb.getDeleteRecordingsUrl(new DeleteRecordingsParameters(sha1));
        if(url.indexOf(new ApiMethod().DELETE_RECORDINGS)===-1)
        {
            console.log("Cannot find "+new ApiMethod().DELETE_RECORDINGS+" in "+url);

        }
    }

    testDeleteRecordings()
    {const crypto = require('crypto');

        var current_date = (new Date()).valueOf().toString();
        var random = Math.random().toString();
        var sha1 = crypto.createHash('sha1').update(current_date + random).digest('hex');
        this.bbb.deleteRecordings(DeleteRecordings,new DeleteRecordingsParameters('non-existing-id-' + sha1));
    }
    testUpdateRecordingsUrl()
    {
        var params = super.generateUpdateRecordingsParams();
        var url    = this.bbb.getUpdateRecordingsUrl(super.getUpdateRecordingsParamsMock(params));

        for (const key of Object.keys(params))
        {
            if(typeof(params[key])==="boolean")
            {
                if(params[key])
                {
                    params[key] ='true';
                }
                else{
                    params[key] ='false';
                }
            }

            if(url.indexOf("="+querystring.stringify(params[key]))===-1)
            {
                console.log("Cannot find "+params[key]+" in "+url);

            }
        }

    }

    testUpdateRecordings()
    {
        var params = super.generateUpdateRecordingsParams();
        this.bbb.updateRecordings(UpdateRecordings,super.getUpdateRecordingsParamsMock(params));

    }


}

function UpdateRecordings(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

           assert.equal('FAILED', obj.getReturnCode());
            console.log('Test Update Recordings Passed.');
        }catch (error) {
            console.log('Test Update Recordings failed.');
        }}
}
;
function ApiCallback(err,obj)
{if(err){
    console.log(err);
}else{

    try{


         assert.equal('SUCCESS', obj.getReturnCode());
         assert.equal('1.0', obj.getVersion());
        console.log('Test Version Response Passed.');
    } catch (error) {
        console.error(' Test Version Response Failed.');
    }
}

};
function CreateMeeting(err,obj)
{   if(err){
    console.log(err);
}else{

    try{
        assert.equal('SUCCESS', obj.getReturnCode());
        console.log('Test Create Meeting result Passed.');
    }catch (error) {
        console.log('Test Create Meeting result Failed.');
    }}
};
function  CreateMeetingWithDocumentUrl(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal(1, obj.countPresentation());
          assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test Create Meeting With Document Url Passed.');
        }catch (error) {
            console.log('Test Create Meeting With Document Url Failed.');
        }}
};
function  CreateMeetingWithDocumentEmbdded(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal(1, obj.countPresentation());
            assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test Create Meeting With Document Embdded Passed.');
        }catch (error) {
            console.log('Test Create Meeting With Document Embdded Failed.');
        }}
};
function SetConfigXMLCreateMeeting(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test Create Meeting  Passed.');
        }catch (error) {
            console.log('Test Create Meeting Failed.');
        }}
};
function  ConfigXML(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{
            assert.notEqual(obj.getToken(), null);
           assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test Create Meeting  Passed.');
        }catch (error) {
            console.log('Test Create Meeting Failed.');
        }}
};
function testSetConfigXMLExecuteRequest(error,obj)
{
    if(error){
        console.log(error);
    }else{

        try{
             var test = new TestCase();
            var params             = {'meetingId' : obj.getMeetingId()};
            var setConfigXMLParams = test.getSetConfigXMLMock(params);
            var btt= new BigBlueButtonTest();
            btt.bbb.setConfigXML(ConfigXML,setConfigXMLParams);

        }catch (error) {
            console.log('Test Create Meeting Failed.');
        }}
};
function empty(err,obj){};
function  EndMeeting(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test End Meeting Passed.');
        }catch (error) {
            console.log('Test End Meeting Failed.');
        }}
};
function  EndNonExistingMeeting(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

           assert.equal('FAILED', obj.getReturnCode());
            console.log('Meeting Doesnt Exist.');
        }catch (error) {
            console.log('Test Meeting  Exist !');
        }}
};
function IsMeetingRunning(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal('SUCCESS', obj.getReturnCode());
            console.log('Test Meeting Is Running.');
        }catch (error) {
            console.log('Test Meeting Isnt Running.');
        }}
};
function  GetMeetings(err,obj)
{
    if(err){
        console.log(err);
    }else {
        if (obj.getMeetings().length === 0) {
            console.log('Test Get Meetings failed.');
        } else {
            console.log('Test Get Meeting  Passed.');
        }
    }

};
function createGetMeetingUrl(err,obj)
{
    if(err){
        console.log(err);
    }else {
        var btt= new BigBlueButtonTest();


        var url = btt.bbb.getMeetingInfoUrl(new GetMeetingInfoParameters(obj.getMeetingId(), obj.getModeratorPassword()));
        if(url.indexOf("="+querystring.stringify(obj.getMeetingId()))===-1)
        {
            console.log("Cannot find "+obj.getMeetingId()+" in "+url);

        }
        if(url.indexOf("="+querystring.stringify( obj.getModeratorPassword()))===-1)
        {
            console.log("Cannot find "+ obj.getModeratorPassword()+" in "+url);

        }


        btt.bbb.getMeetingInfo(GetMeetingInfo,new GetMeetingInfoParameters(obj.getMeetingId(), obj.getModeratorPassword()));

    }
};

function createEndMeetingtest(err,obj)
{
    if(err){
        console.log(err);
    }else {


        var btt= new BigBlueButtonTest();

        btt.bbb.endMeeting(EndMeeting,new EndMeetingParameters(obj.getMeetingId(), obj.getModeratorPassword()));

    }
};
function createGetMeeting(err,obj)
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
function GetRecordings(err,obj)
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
function XmlTestNull(err,result)
{
    if(err){
    console.log(err);
}else{
    if(!result.getRawXML()){
        console.log('Default Config XMl is Null');
    }}
}
function  PublishRecordings(err,obj)
{
    if(err){
        console.log(err);
    }else{

        try{

            assert.equal('FAILED', obj.getReturnCode());
            console.log('Test Publish Recordings Passed.');
        }catch (error) {
            console.log('Test Publish Recordings failed.');
        }}
};
function DeleteRecordings(err,obj)
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
module.exports=BigBlueButtonTest;