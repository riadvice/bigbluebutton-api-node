var Base = require('./BaseParametres');

class ApiVersionParameteres extends Base {
    constructor(returnCode,running) {
    super();
        this.returnCode = returnCode;
        this.running = running;



    }
    getReturnCode()
    {
        return this.returnCode;
    }
    getRunning() {
        return this.running;
    }
    setMe(m){
        this.me = m;
        return this;
    }
    getMe(){
        return this.me;
    }

}



module.exports=ApiVersionParameteres;