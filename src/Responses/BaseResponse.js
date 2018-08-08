var parser = require('../parser');
var parse = require('xml-js');
class BaseResponse{
    constructor(rawXML)
    {
        this.rawXML=parser(rawXML);

    }
    getRawXML()
    {
        return parse.json2xml(this.rawXML, {compact: true});;
    }

    getReturnCode()
    {
        return this.rawXML.response.returncode._text ;
    }
    getMessageKey()
    {
        return this.rawXML.response.messageKey._text ;
    }
    getMessage()
    {
        return this.rawXML.response.message._text ;
    }


}

module.exports=BaseResponse;