var Base = require('./BaseParametres');
class endParameteres extends Base{
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


}
module.exports=endParameteres;