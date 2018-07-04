var Base = require('./BaseParametres');
class publishRecordingsParameteres extends Base {
    constructor(recordingId, publish)
    {   super();
        this.recordingId = recordingId;
        this.publish     = publish;
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
    isPublish()
    {
        return this.publish;
    }
    setPublish(publish)
    {
        this.publish = publish;
    }
    getHTTPQuery()
    {
        return super.buildHTTPQuery(
            {
                'recordID': this.recordingId,
                'publish': this.publish /*? 'true' : 'false'*/
            }
    );
    }

}
module.exports=publishRecordingsParameteres;