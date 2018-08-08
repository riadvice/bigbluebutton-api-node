var BaseResponse = require('./BaseResponse');

class PublishRecordingsResponse extends BaseResponse {
    constructor(rawXML)
    {
        super(rawXML);
    }
    isPublished()
    {
        return this.rawXML.response.published._text;

    }


}
module.exports=PublishRecordingsResponse;