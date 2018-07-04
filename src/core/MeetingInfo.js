var Meeting = require('./Meeting');
class MeetingInfo extends Meeting{
    constructor(xml)
    {
        super(xml);
        this.internalMeetingId     = xml.internalMeetingID._text;
        this.isRecording           = xml.recording._text;
        this.startTime             = parseFloat(xml.startTime._text);
        this.endTime               = parseFloat(xml.endTime._text);
        this.maxUsers              = xml.maxUsers._text;//(+0)
        this.moderatorCount        = xml.moderatorCount._text;//(+0)
    }
    getInternalMeetingId()
    {
        return this.internalMeetingId;
    }

    getIsRecording()
    {
        return this.isRecording;
    }

    getStartTime()
    {
        return this.startTime;
    }

    getEndTime()
    {
        return this.endTime;
    }

    getMaxUsers()
    {
        return this.maxUsers;
    }

    getModeratorCount()
    {
        return this.moderatorCount;
    }
}
module.exports=MeetingInfo;