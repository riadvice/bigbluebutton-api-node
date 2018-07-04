
const querystring = require('querystring');
class BaseParametres{
    buildHTTPQuery(obj)
    {
        return querystring.stringify(obj);
    }

   getHTTPQuery(){}

}
module.exports=BaseParametres;