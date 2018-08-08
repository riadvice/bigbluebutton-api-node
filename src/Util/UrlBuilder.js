const crypto = require('crypto');

class UrlBuilder {

    constructor(salt, serverBaseUrl)
    {
        this.securitySalt     = salt;
        this.bbbServerBaseUrl = serverBaseUrl;
    }

    buildUrl(method = '', params = '', append = true)
    {
        return this.bbbServerBaseUrl+'api/'+method+(append ? '?'+this.buildQs(method, params) : '');
    }

    buildQs(method, params)
    {
       // console.log('-'+method+'//////////////////////////////////////////////////'+params);
        var sha1 = crypto.createHash("sha1").update(method+params+this.securitySalt).digest("hex");
       // console.log('-'+sha1);
       // console.log('*****************');
        return params+'&checksum='+sha1;

    }



}

module.exports=UrlBuilder;