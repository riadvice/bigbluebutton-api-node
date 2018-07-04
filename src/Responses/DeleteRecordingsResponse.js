var BaseResponse = require('./BaseResponse');
class DeleteRecordingsResponse extends BaseResponse{
    isDeleted()
    {
       return  this.rawXML.response.deleted._text;
    }
}

module.exports=DeleteRecordingsResponse;