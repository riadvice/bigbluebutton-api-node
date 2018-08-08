var MetaParameters = require('./MetaParameters');

class getRecordingsParameteres extends MetaParameters{
    getMeetingId()
    {
        return this.meetingId;
    }

    setMeetingId(meetingId)
    {
        this.meetingId = meetingId;
        return this;
    }
   getRecordId()
    {
        return this.recordId;
    }
    setRecordId(recordId)
    {
        this.recordId = recordId;
        return this;
    }
    getState()
    {
        return this.state;
    }
    setState(state)
    {
        this.state = state;
        return this;
    }
    getHTTPQuery()
    {
        var queries = {
            'meetingID': this.meetingId,
            'recordID': this.recordId,
            'state': this.state
        };
        super.buildMeta(queries);


        return super.hTTPQuery(queries);
    }
    // constructor(ReturnCode, recordID, meetingID, name, published, state, startTime, endTime, type, url, length) {
    //     super();
    //     this.ReturnCode = ReturnCode;
    //     this.recordID = recordID;
    //     this.meetingID = meetingID;
    //     this.name = name;
    //     this.published = published;
    //     this.state = state;
    //     this.startTime = startTime;
    //     this.endTime = endTime;
    //     this.type = type;
    //     this.url = url;
    //     this.length = length;
    //
    //
    // }
    //
    // getReturnCode()
    // {
    //     return this.returnCode;
    // }
    //
    // getRecordIDy() {
    //     return this.recordID;
    // }
    //
    // getMeetingID() {
    //     return this.meetingID;
    // }
    //
    // getName() {
    //     return this.name;
    // }
    //
    // getPublished() {
    //     return this.published;
    // }
    //
    // getState() {
    //     return this.state;
    // }
    //
    // getStartTime() {
    //     return this.startTime;
    // }
    //
    // getEndTime() {
    //     return this.endTime;
    // }
    //
    // getType() {
    //     return this.type;
    // }
    //
    // getUrl() {
    //     return this.url;
    // }
    //
    // getLength() {
    //     return this.length;
    // }
}
module.exports=getRecordingsParameteres;