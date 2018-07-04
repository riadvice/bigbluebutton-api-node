
class ApiMethod
{
    constructor()
    {

        this.CREATE                 = 'create';
        this.JOIN                   = 'join';
        this.ENTER                  = 'enter';
        this.END                    = 'end';
        this.IS_MEETING_RUNNING     = 'isMeetingRunning';
        this.GET_MEETING_INFO       = 'getMeetingInfo';
        this.GET_MEETINGS           = 'getMeetings';
        this.GET_DEFAULT_CONFIG_XML = 'getDefaultConfigXML';
        this.SET_CONFIG_XML         = 'setConfigXML';
        this.CONFIG_XML             = 'configXML';
        this.SIGN_OUT               = 'signOut';
        this.GET_RECORDINGS         = 'getRecordings';
        this.PUBLISH_RECORDINGS     = 'publishRecordings';
        this.DELETE_RECORDINGS      = 'deleteRecordings';
        this.UPDATE_RECORDINGS      = 'updateRecordings';
    }



}

// console.log(new ApiMethod().GET_RECORDINGS);
module.exports=ApiMethod;