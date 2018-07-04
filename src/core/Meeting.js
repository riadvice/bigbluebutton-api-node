class Meeting{
    constructor(xml)
    {
        this.meetingId             = xml.meetingID._text;
        this.meetingName           = xml.meetingName._text;
        this.creationTime          = parseFloat(xml.createTime._text);
        this.creationDate          = xml.createDate._text;
        this.voiceBridge           = parseInt(xml.voiceBridge._text);
        this.dialNumber            = xml.dialNumber._text;
        this.attendeePassword      = xml.attendeePW._text;
        this.moderatorPassword     = xml.moderatorPW._text;
        this.hasBeenForciblyEnded  = xml.hasBeenForciblyEnded._text;
        this.isRunning             = xml.running._text;
        this.participantCount      = parseInt(xml.participantCount._text);
        this.listenerCount         = parseInt(xml.listenerCount._text);
        this.voiceParticipantCount = parseInt(xml.voiceParticipantCount._text);
        this.videoCount            = parseInt(xml.videoCount._text);
        this.duration              = parseInt(xml.duration._text);
        this.hasUserJoined         = xml.hasUserJoined._text;
    }
    getMeetingId()
    {
        return this.meetingId;
    }
    getMeetingName()
    {
        return this.meetingName;
    }

    getCreationTime()
    {
        return this.creationTime;
    }

   getCreationDate()
    {
        return this.creationDate;
    }

   getVoiceBridge()
    {
        return this.voiceBridge;
    }

    getDialNumber()
    {
        return this.dialNumber;
    }

    getAttendeePassword()
    {
        return this.attendeePassword;
    }

    getModeratorPassword()
    {
        return this.moderatorPassword;
    }
    /**
     * @return bool
     */
    getHasBeenForciblyEnded()
    {
        return this.hasBeenForciblyEnded;
    }

    getIsRunning()
    {
        return this.isRunning;
    }

    getParticipantCount()
    {
        return this.participantCount;
    }

    getListenerCount()
    {
        return this.listenerCount;
    }

    getVoiceParticipantCount()
    {
        return this.voiceParticipantCount;
    }

    getVideoCount()
    {
        return this.videoCount;
    }

    getDuration()
    {
        return this.duration;
    }

    getHasUserJoined()
    {
        return this.hasUserJoined;
    }

}
module.exports=Meeting;