var parser = require('../parser');
class BaseResponse{
    constructor(rawXML)
    {
        this.rawXML=parser(rawXML);

    }
    getRawXML()
    {
        return this.rawXML;
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