var BaseResponse = require('./BaseResponse');

class PublishRecordingsResponse extends BaseResponse {
    isPublished()
    {
        return this.rawXML.response.published._text;

    }


}
module.exports=PublishRecordingsResponse;