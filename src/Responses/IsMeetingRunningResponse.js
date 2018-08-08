var BaseResponse = require('./BaseResponse');

class IsMeetingRunningResponse extends BaseResponse {
    constructor(rawXML)
    {
        super(rawXML);
    }
     isRunning()
    {
        return this.rawXML.response.running._text;
    }


}
module.exports=IsMeetingRunningResponse;