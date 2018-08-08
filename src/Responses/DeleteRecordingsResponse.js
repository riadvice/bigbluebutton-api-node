var BaseResponse = require('./BaseResponse');
class DeleteRecordingsResponse extends BaseResponse{
    constructor(rawXML)
    {
        super(rawXML);
    }
    isDeleted()
    {
       return  this.rawXML.response.deleted._text;
    }
}

module.exports=DeleteRecordingsResponse;