var Base = require('./BaseParametres');
class getInfoMeetingParameteres extends Base{
    constructor(meetingId,password)
    {   super();
        this.password  = password;
        this.meetingId = meetingId;
    }

    getMeetingId()
    {
        return this.meetingId;
    }
    getPassword()
    {
        return this.password;
    }

    setPassword(password)
    {
        this.password=password;
        return  this;
    }
    setMeetingId(meetingId)
    {
        this.meetingId=meetingId;
        return  this;
    }
    getHTTPQuery()
    {
        return super.buildHTTPQuery(
            {   'meetingID' : this.meetingId,
                'password'  :this.password,});
    }

    // constructor(ReturnCode, meetingName, meetingID, internalMeetingID, createTime, createDate, voiceBridge, dialNumber, attendeePW, moderatorPW, running, duration, hasUserJoined, recording, hasBeenForciblyEnded, startTime, endTime, participantCount, listenerCount, voiceParticipantCount, videoCount, maxUsers, moderatorCount)
    // {
    //     super();
    //     this.ReturnCode = ReturnCode;
    //     this.meetingName = meetingName;
    //     this.meetingID = meetingID;
    //     this.internalMeetingID = internalMeetingID;
    //     this.createTime = createTime;
    //     this.createDate = createDate;
    //     this.voiceBridge = voiceBridge;
    //     this.dialNumber = dialNumber;
    //     this.attendeePW = attendeePW;
    //     this.moderatorPW = moderatorPW;
    //     this.running = running;
    //     this.duration = duration;
    //     this.hasUserJoined = hasUserJoined;
    //     this.recording = recording;
    //     this.hasBeenForciblyEnded = hasBeenForciblyEnded;
    //     this.startTime = startTime;
    //     this.endTime = endTime;
    //     this.participantCount = participantCount;
    //     this.listenerCount = listenerCount;
    //     this.voiceParticipantCount = voiceParticipantCount;
    //     this.videoCount = videoCount;
    //     this.maxUsers = maxUsers;
    //     this.moderatorCount = moderatorCount;
    // }
    //
    // getReturnCode()
    // {
    //     return this.returnCode;
    // }
    // getMeetingName()
    // {
    //     return this.meetingName;
    // }
    //
    // getMeetingID()
    // {
    //     return this.meetingID;
    // }
    //
    // getInternalMeetingID()
    // {
    //     return this.internalMeetingID;
    // }
    //
    // getCreateTime()
    // {
    //     return this.createTime;
    // }
    //
    // getCreateDate()
    // {
    //     return this.createDate;
    // }
    //
    // getVoiceBridge()
    // {
    //     return this.voiceBridge;
    // }
    //
    // getDialNumber()
    // {
    //     return this.dialNumber;
    // }
    //
    // getAttendeePW()
    // {
    //     return this.attendeePW;
    // }
    //
    // getModeratorPW()
    // {
    //     return this.moderatorPW;
    // }
    //
    // getRunning()
    // {
    //     return this.running;
    // }
    //
    // getDuration()
    // {
    //     return this.duration;
    // }
    //
    // getHasUserJoined()
    // {
    //     return this.hasUserJoined;
    // }
    //
    // getRecording()
    // {
    //     return this.recording;
    // }
    //
    // getHasBeenForciblyEnded()
    // {
    //     return this.hasBeenForciblyEnded;
    // }
    //
    // getStartTime()
    // {
    //     return this.startTime;
    // }
    //
    // getEndTime()
    // {
    //     return this.endTime;
    // }
    //
    // getParticipantCount()
    // {
    //     return this.participantCount;
    // }
    //
    // getListenerCount()
    // {
    //     return this.listenerCount;
    // }
    //
    // getVoiceParticipantCounty()
    // {
    //     return this.voiceParticipantCount;
    // }
    //
    // getVideoCount()
    // {
    //     return this.videoCount;
    // }
    //
    // getMaxUsers()
    // {
    //     return this.maxUsers;
    // }
    //
    // getModeratorCount()
    // {
    //     return this.moderatorCount;
    // }

}
module.exports=getInfoMeetingParameteres;