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
var strlen=require('locutus/php/strings/strlen');
class BigBlueButton {

    constructor() {
        this.securitySalt = getenv('BBB_SECURITY_SALT');
        this.bbbServerBaseUrl = getenv('BBB_SERVER_BASE_URL');
        this.urlBuilder = new UrlBuilder(this.securitySalt, this.bbbServerBaseUrl);
    }
    getApiVersion()
    {
        return new ApiVersionResponse(this.processXmlResponse(this.urlBuilder.buildUrl()));
    }

    getCreateMeetingUrl(createMeetingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().CREATE, createMeetingParams.getHTTPQuery());
    }

    setConfigXML(setConfigXMLParams)
    {
        var setConfigXMLPayload = this.urlBuilder.buildQs(new ApiMethod().SET_CONFIG_XML, setConfigXMLParams.getHTTPQuery());
        var xml = this.processXmlResponse(this.setConfigXMLUrl(), setConfigXMLPayload );
        return new SetConfigXMLResponse(xml);
    }

     getJoinMeetingURL(joinMeetingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().JOIN, joinMeetingParams.getHTTPQuery());
    }

    joinMeeting(joinMeetingParams)
    {
        var xml = this.processXmlResponse(this.getJoinMeetingURL(joinMeetingParams));
        return new JoinMeetingResponse(xml);
    }

    getEndMeetingURL(endParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().END, endParams.getHTTPQuery());
    }

    endMeeting(endParams)
    {
        var xml = this.processXmlResponse(this.getEndMeetingURL(endParams));
        return new EndMeetingResponse(xml);
    }

    getIsMeetingRunningUrl(meetingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().IS_MEETING_RUNNING, meetingParams.getHTTPQuery());
    }

    isMeetingRunning(meetingParams)
    {
        var xml = this.processXmlResponse(this.getIsMeetingRunningUrl(meetingParams));
        return new IsMeetingRunningResponse(xml);
    }

    getMeetingsUrl()
    {
        return this.urlBuilder.buildUrl(new ApiMethod().GET_MEETINGS);
    }

    getMeetings()
    {
        var xml = this.processXmlResponse(this.getMeetingsUrl());
        return new GetMeetingsResponse(xml);
    }

    getMeetingInfoUrl(meetingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().GET_MEETING_INFO, meetingParams.getHTTPQuery());
    }

    getMeetingInfo(meetingParams)
    {
        var xml = this.processXmlResponse(this.getMeetingInfoUrl(meetingParams));
        return new GetMeetingInfoResponse(xml);
    }

    getRecordingsUrl(recordingsParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().GET_RECORDINGS, recordingsParams.getHTTPQuery());
    }

    getRecordings(recordingParams)
    {
        var xml = this.processXmlResponse(this.getRecordingsUrl(recordingParams));
        return new GetRecordingsResponse(xml);
    }

    getPublishRecordingsUrl(recordingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().PUBLISH_RECORDINGS, recordingParams.getHTTPQuery());
    }

    publishRecordings(recordingParams)
    {
        var xml = this.processXmlResponse(this.getPublishRecordingsUrl(recordingParams));
        return new PublishRecordingsResponse(xml);
    }

    getDeleteRecordingsUrl(recordingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().DELETE_RECORDINGS, recordingParams.getHTTPQuery());
    }

    deleteRecordings(recordingParams)
    {
        var xml = this.processXmlResponse(this.getDeleteRecordingsUrl(recordingParams));
        return new DeleteRecordingsResponse(xml);
    }

    getUpdateRecordingsUrl(recordingParams)
    {
        return this.urlBuilder.buildUrl(new ApiMethod().UPDATE_RECORDINGS, recordingParams.getHTTPQuery());
    }

   updateRecordings(recordingParams)
    {
        var xml = this.processXmlResponse(this.getUpdateRecordingsUrl(recordingParams));
        return new UpdateRecordingsResponse(xml);
    }

    processXmlResponse(url,payload='',contentType='')
    {
        // var curl = new Curl();
        // var file = 'response.txt';
        // curl.setOpt(Curl.option.URL, url);
        //
        // if(payload!='')
        // {
        //     curl.setOpt(Curl.option.POSTFIELDS, payload);
        // }
        // curl.on('end', function(statusCode, body, headers) {
        //
        //     fs.writeFile(file, body);
        //
        //     this.close();
        // });
        // curl.perform();
        //
        // curl.on('error', curl.close.bind(curl));
        // var obj = fs.readFileSync(file,'utf8');
        // return parse.js2xml(obj, {compact: true});
    }
}