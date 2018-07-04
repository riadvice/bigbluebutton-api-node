var BaseResponse = require('./BaseResponse');

class IsMeetingRunningResponse extends BaseResponse {
     isRunning()
    {
        return this.rawXML.response.running._text;
    }


}
module.exports=IsMeetingRunningResponse;