var BaseResponse = require('./BaseResponse');

class UpdateRecordingsResponse extends BaseResponse {
    getIsUpdated()
    {
        return this.rawXML.response.updated._text;
    }


}
module.exports=UpdateRecordingsResponse;