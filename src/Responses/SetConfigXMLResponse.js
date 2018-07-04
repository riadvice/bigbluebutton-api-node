var BaseResponse = require('./BaseResponse');

class SetConfigXMLResponse extends BaseResponse {
    getToken()
    {
        return this.rawXML.response.token._text;
    }


}
module.exports=SetConfigXMLResponse;