var BaseResponse = require('./BaseResponse');

class JoinMeetingResponse extends BaseResponse {
    getMeetingId() {
        return this.rawXML.response.meeting_id._text ;
    }

    getUserId() {
        return this.rawXML.response.user_id._text;
    }

    getAuthToken() {
        return this.rawXML.response.auth_token._text;
    }

    getSessionToken() {
        return this.rawXML.response.session_token._text;
    }


}
module.exports=JoinMeetingResponse;