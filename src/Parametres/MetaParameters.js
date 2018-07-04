var Base = require('./BaseParametres');
class MetaParameters extends Base
{

    //private $meta = [];
    constructor(){
        super();
        this.meta={};
    }

    getMeta(key)
{
    return this.meta[key];
}

    addMeta(key, value)
{
    this.meta[key] = value;
    return this;
}
    buildMeta(queries) {
        if (Object.keys(this.meta).length !== 0) {
            for (const key of Object.keys(this.meta))
            {
                queries['meta_' + key] = this.meta[key];
            }
        }
        return queries;

    }
}
module.exports=MetaParameters;