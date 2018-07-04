var Base = require('./BaseParametres');
class deleteRecordingsParameteres extends Base{
    constructor(recordingId)
    {
        super();
        this.recordingId = recordingId;
    }

    getRecordingId()
    {
        return this.recordingId;
    }
    setRecordingId(recordingId)
    {
        this.recordingId = recordingId;
        return this;
    }

    getHTTPQuery()
    {
        return super.buildHTTPQuery({'recordID' : this.recordingId});
    }
}
module.exports=deleteRecordingsParameteres;
