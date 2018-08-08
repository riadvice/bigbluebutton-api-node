var BaseResponse = require('./BaseResponse');

class SetConfigXMLResponse extends BaseResponse {
    constructor(rawXML)
    {
        super(rawXML);
    }
    getToken()
    {
        return this.rawXML.response.token._text;
    }


}
module.exports=SetConfigXMLResponse;