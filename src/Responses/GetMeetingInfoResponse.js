var BaseResponse = require('./BaseResponse');
var MeetingInfo = require('../core/MeetingInfo');
var Attendee = require('../core/Attendee');
class GetMeetingInfoResponse  extends BaseResponse{

    constructor(xml)
    {
        super(xml);
        this.meetingInfo= new MeetingInfo(this.rawXML.response);
        this.attendees= [];
        if(this.rawXML.response.attendees.attendee){
        for (var i=0 ;i<this.rawXML.response.attendees.attendee.length;i++) {
            this.attendees[i] = new Attendee(this.rawXML.response.attendees.attendee[i]);
        }}



    }




    getMeetingInfo()
    {
        if (this.meetingInfo) {

            return this.meetingInfo;
        }
        else {

            this.meetingInfo = new MeetingInfo(this.rawXML.response);
            return this.meetingInfo;
        }

    }

    getAttendees()
    {
        if (this.attendees) {

            return this.attendees;

        } else {

            for (var i=0 ;i<this.rawXML.response.attendees.attendee.length;i++) {
                this.attendees[i] = new Attendee(this.rawXML.response.attendees.attendee[i]);

            }
            return this.attendees;
        }

    }
}

module.exports=GetMeetingInfoResponse ;