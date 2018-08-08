var BaseResponse = require('./BaseResponse');

class UpdateRecordingsResponse extends BaseResponse {
    constructor(rawXML)
    {
        super(rawXML);
    }
    getIsUpdated()
    {
        return this.rawXML.response.updated._text;
    }


}
module.exports=UpdateRecordingsResponse;