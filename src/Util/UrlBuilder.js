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
    {   var sha1 = crypto.createHash("sha1").update(method+params+this.securitySalt).digest("hex");
        return params+'&checksum='+sha1;

    }



}

module.exports=UrlBuilder;