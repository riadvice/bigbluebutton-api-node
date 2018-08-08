var BaseResponse = require('./BaseResponse');
class EndMeetingResponse extends BaseResponse{
    constructor(rawXML)
    {
        super(rawXML);
    }
}

module.exports=EndMeetingResponse;