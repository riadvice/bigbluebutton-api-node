var MetaParameters = require('./MetaParameters');
class updateRecordingsParameteres extends MetaParameters{
    constructor(recordingId) {
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
        queries = {
            'recordID' : this.recordingId
    };
        super.buildMeta(queries);
        return super.buildHTTPQuery(queries);
    }


}
module.exports=updateRecordingsParameteres;