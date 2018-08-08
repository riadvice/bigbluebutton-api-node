var getenv = require('getenv');
var UrlBuilder = require('./Util/UrlBuilder');
var ApiMethod = require('./core/ApiMethod');
var parse = require('xml-js');
var Curl = require('node-libcurl').Curl;
var fs = require('fs');
var ApiVersionResponse =require('./Responses/ApiVersionResponse');
var SetConfigXMLResponse =require('./Responses/SetConfigXMLResponse');
var JoinMeetingResponse = require('./Responses/joinMeetingResponse');
var EndMeetingResponse = require('./Responses/EndMeetingResponse');
var IsMeetingRunningResponse = require('./Responses/IsMeetingRunningResponse');
var GetMeetingsResponse = require('./Responses/GetMeetingsResponse');
var GetMeetingInfoResponse = require('./Responses/GetMeetingInfoResponse');
var GetRecordingsResponse = require('./Responses/GetRecordingsResponse');
var PublishRecordingsResponse = require('./Responses/PublishRecordingsResponse');
var DeleteRecordingsResponse = require('./Responses/DeleteRecordingsResponse');
var UpdateRecordingsResponse = require('./Responses/UpdateRecordingsResponse');
var CreateMeetingParametres = require('../src/Parametres/CreateMeetingParametres');
var GetMeetingInfoParameters = require('../src/Parametres/GetMeetingInfoParametres');
var strlen=require('locutus/php/strings/strlen');
var dynamicClass = require('./Responses/ResponseClassFactory.js');
class BigBlueButton {

    constructor() {
        this.securitySalt = getenv('BBB_SECURITY_SALT');
        this.bbbServerBaseUrl = getenv('BBB_SERVER_BASE_URL');
        this.urlBuilder = new UrlBuilder(this.securitySalt, this.bbbServerBaseUrl);
    }
    getApiVersion(callback)
    {

        this.processXmlResponse(this.urlBuilder.buildUrl(), 'ApiVersionResponse', callback)
    }

    getCreateMeetingUrl(createMeetingParams)
    {
        return  this.urlBuilder.buildUrl(new ApiMethod().CREATE, createMeetingParams.getHTTPQuery());
    }

    createMeeting(callback,createMeetingParams)
    {   var url = this.getCreateMeetingUrl(createMeetingParams);
       // console.log(createMeetingParams.getPresentationsAsXML());
        this.processXmlResponse(url,'CreateMeetingResponse',callback,createMeetingParams.getPresentationsAsXML());

    }
    getDefaultConfigXMLUrl()
    {
        return this.urlBuilder.buildUrl(new ApiMethod().SET_CONFIG_XML);
    }
    getDefaultConfigXML(callback)
    {   var url = this.getDefaultConfigXMLUrl();
        this.processXmlResponse(url,'GetDefaultConfigXMLResponse',callback);

    }
    setConfigXML(callback,setConfigXMLParams)
    {   var url = this.getDefaultConfigXMLUrl();
        var setConfigXMLPayload = this.urlBuilder.buildQs(new ApiMethod().SET_CONFIG_XML, setConfigXMLParams.getHTTPQuery());
        this.processXmlResponse(url,'SetConfigXMLResponse',callback, setConfigXMLPayload );

    }
    setConfigXMLUrl()
    {
        return this.urlBuilder.buildUrl(new ApiMethod().SET_CONFIG_XML, '', false);
    }
    getJoinMeetingURL(joinMeetingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().JOIN, joinMeetingParams.getHTTPQuery());
    }
    joinMeeting(callback,joinMeetingParams)
    {   var url = this.getJoinMeetingURL(joinMeetingParams);
        this.processXmlResponse(url,'JoinMeetingResponse',callback);

    }
    getEndMeetingURL(endParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().END, endParams.getHTTPQuery());
    }

    endMeeting(callback,endParams)
    {
        var url = this.getEndMeetingURL(endParams);
        console.log(url);
        this.processXmlResponse(url,'EndMeetingResponse',callback);

    }

    getIsMeetingRunningUrl(meetingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().IS_MEETING_RUNNING, meetingParams.getHTTPQuery());
    }

    isMeetingRunning(callback,meetingParams)
    {
        var url = this.getIsMeetingRunningUrl(meetingParams);
        console.log(url);
        this.processXmlResponse(url,'IsMeetingRunningResponse',callback);

    }

    getMeetingsUrl()
    {
        return this.urlBuilder.buildUrl(new ApiMethod().GET_MEETINGS);
    }

    getMeetings(callback)
    {
        var url = this.getMeetingsUrl();
        this.processXmlResponse(url,'GetMeetingsResponse',callback);

    }
    getMeetingInfoUrl(meetingParams)
    {
        console.log( meetingParams.getHTTPQuery());
        return this.urlBuilder.buildUrl(new ApiMethod().GET_MEETING_INFO, meetingParams.getHTTPQuery());
    }
    getMeetingInfo(callback,meetingParams)
    {
        var url = this.getMeetingInfoUrl(meetingParams);

        this.processXmlResponse(url,'GetMeetingInfoResponse',callback);

    }

    getRecordingsUrl(recordingParams)
    {
        console.log(recordingParams.getHTTPQuery());
        return this.urlBuilder.buildUrl(new ApiMethod().GET_RECORDINGS, recordingParams.getHTTPQuery());
    }
    getRecordings(callback,recordingParams)
    {
        var url =  this.getRecordingsUrl(recordingParams);
        console.log(url);
        this.processXmlResponse(url,'GetRecordingsResponse',callback);

    }
    getPublishRecordingsUrl(recordingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().PUBLISH_RECORDINGS, recordingParams.getHTTPQuery());
    }
    publishRecordings(callback,recordingParams)
    {
        var url =   this.getPublishRecordingsUrl(recordingParams);
        this.processXmlResponse(url,'PublishRecordingsResponse',callback);

    }
    getDeleteRecordingsUrl(recordingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().DELETE_RECORDINGS, recordingParams.getHTTPQuery());
    }
    deleteRecordings(callback,recordingParams)
    {
        var url = this.getDeleteRecordingsUrl(recordingParams);
        this.processXmlResponse(url,'DeleteRecordingsResponse',callback);

    }
    getUpdateRecordingsUrl(recordingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().UPDATE_RECORDINGS, recordingParams.getHTTPQuery());
    }
   updateRecordings(callback,recordingParams)
    {
        var url = this.getUpdateRecordingsUrl(recordingParams);
        this.processXmlResponse(url,'UpdateRecordingsResponse',callback);

    }

    processXmlResponse(url, className, callback,payload='')
    {   var curl = new Curl();
        curl.setOpt('URL', 'http://ptsv2.com/t/xml/post');
        curl.setOpt('FOLLOWLOCATION', true);
       //console.log(url);

        if(payload!=='')
        {
            curl.setOpt(Curl.option.POSTFIELDS, payload);
            //curl.setOpt(Curl.option.HTTPHEADER, ['Content-Type: application/x-www-form-urlencoded']);
            //curl.setOpt(Curl.option.VERBOSE, true);

        }
        curl.on('end',function(statusCode, body, headers){


       try{

           console.log('**********************');

           console.log('');
           console.log('**********************');
            //     var response = parse.xml2js(body, {compact: true});
            //
            //     const classResponse = dynamicClass(className);
            //     var obj = new classResponse(body);
            //     //console.log(body);
            //
            // callback(null,obj);


        }catch (e) {
        callback(e,obj);

    }
            this.close();
        });

        curl.on('error', curl.close.bind(curl));
        curl.perform();

        // bbb.getVersion(function(error, response) { console.log(response.version) })
        // url.on('end', function(statusCode, body, headers) {
        //     1 -Store body
        //     2 - Parse body and create a new instance // Introspection => new responseType(body)
        //     3 - callback(error, response) // error null to test, response is the introspected object
        //
        //      this.close();

    }
}
module.exports=BigBlueButton;