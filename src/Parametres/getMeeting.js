function getMeeting(ReturnCode,meetingID,meetingName,createTime,createDate,voiceBridge,dialNumber,attendeePW,moderatorPW,hasBeenForciblyEnded,running,participantCount,listenerCount,voiceParticipantCount,videoCount,duration,hasUserJoined) {



    this.ReturnCode = ReturnCode;
    this.meetingID = meetingID;
    this.meetingName = meetingName;
    this.createTime = createTime;
    this.createDate = createDate;
    this.voiceBridge = voiceBridge;
    this.dialNumber = dialNumber;
    this.attendeePW = attendeePW;
    this.moderatorPW = moderatorPW;
    this.hasBeenForciblyEnded = hasBeenForciblyEnded;
    this.running = running;
    this.participantCount = participantCount;
    this.listenerCount = listenerCount;
    this.voiceParticipantCount = voiceParticipantCount;
    this.videoCount = videoCount;
    this.duration = duration;
    this.hasUserJoined = hasUserJoined;

}

getMeeting.prototype.getReturnCode=function(){ return this.ReturnCode;};
getMeeting.prototype.getMeetingID=function(){ return this.meetingID;};
getMeeting.prototype.getMeetingName=function(){ return this.meetingName;};
getMeeting.prototype.getCreateTimee=function(){ return this.createTime;};
getMeeting.prototype.getCreateDate=function(){ return this.createDate;};
getMeeting.prototype.getVoiceBridge=function(){ return this.voiceBridge;};
getMeeting.prototype.getDialNumber=function(){ return this.dialNumber;};
getMeeting.prototype.getAttendeePW=function(){ return this.attendeePW;};
getMeeting.prototype.getModeratorPW=function(){ return this.moderatorPW;};
getMeeting.prototype.getHasBeenForciblyEnded=function(){ return this.hasBeenForciblyEnded;};
getMeeting.prototype.getRunning=function(){ return this.running;};
getMeeting.prototype.getParticipantCount=function(){ return this.participantCount;};
getMeeting.prototype.getListenerCount=function(){ return this.listenerCount;};
getMeeting.prototype.getVoiceParticipantCount=function(){ return this.voiceParticipantCount;};
getMeeting.prototype.getVideoCount=function(){ return this.videoCount;};
getMeeting.prototype.getDuration=function(){ return this.duration;};
getMeeting.prototype.getHasUserJoined=function(){ return this.hasUserJoined;};
module.exports=getMeeting;