var BaseResponse = require('./BaseResponse');
class CreateMeetingResponse extends BaseResponse{

    getMeetingId()
    {
        return this.rawXML.response.meetingID._text;
    }
    getInternalMeetingId()
    {
        return this.rawXML.response.internalMeetingID._text;
    }
    getParentMeetingId()
    {
        return this.rawXML.response.parentMeetingID._text;
    }
    getAttendeePassword()
    {
        return this.rawXML.response.attendeePW._text;
    }
    getModeratorPassword()
    {
        return this.rawXML.response.moderatorPW._text;
    }
    getCreationTime()
    {
        return this.rawXML.response.createTime._text;
    }
    getVoiceBridge()
    {
        return this.rawXML.response.voiceBridge._text;
    }
    getDialNumber()
    {
        return this.rawXML.response.dialNumber._text;
    }
    getCreateDate()
    {
        return this.rawXML.response.createDate._text;
    }
    hasUserJoined()
    {
        return this.rawXML.response.hasUserJoined._text;
    }
    getDuration()
    {
        return this.rawXML.response.duration._text;
    }
    hasBeenForciblyEnded()
    {
        return this.rawXML.response.hasBeenForciblyEnded._text;
    }



}
// var a = new CreateMeetingResponse('../data/createMeetingData.xml');
// console.log(a.getMessage());
module.exports=CreateMeetingResponse;