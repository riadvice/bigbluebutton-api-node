// Inherit from a BaseResponse class
// function get isRunning() {jsonRoot.returncode._text}
var Base = require('./BaseParametres');
class IsMeetingRunningParameteres extends Base {
    constructor(meetingId) {

        super();
        this.meetingId = meetingId;

    }
    getMeetingId()
    {
        return this.meetingId;
    }
   setMeetingId(meetingId)
    {
        this.meetingId = meetingId;
        return this;
    }
   getHTTPQuery()
    {
        return super.buildHTTPQuery({'meetingID' : this.meetingId});
    }

}



// var nes = new IsMeetingRunningParameteres('code','run');
// console.log(nes.getReturnCode());
// console.log(nes.getRunning());
module.exports=IsMeetingRunningParameteres;

