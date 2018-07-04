var Base = require('./BaseParametres');
var Buffer = require('buffer').Buffer;
class setConfigParameteres extends Base  {
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
    getRawXml()
    {
        return this.rawXml;
    }
    setRawXml(rawXml)
    {
        this.rawXml = rawXml;
        return this;
    }
   getHTTPQuery()
    {
        return super.buildHTTPQuery(
            {
                'configXML' : Buffer.from(this.rawXml, 'ascii').toString('base64'),
        'meetingID' : this.meetingId
    }
    );
    }
}
module.exports=setConfigParameteres;