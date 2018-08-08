var ApiVersionResponse = require('./ApiVersionResponse');
var DeleteRecordingsResponse = require('./DeleteRecordingsResponse');
var CreateMeetingResponse = require('./CreateMeetingResponse');
var EndMeetingResponse = require('./EndMeetingResponse');
var GetDefaultConfigXMLResponse = require('./GetDefaultConfigXMLResponse');
var GetMeetingInfoResponse = require('./GetMeetingInfoResponse');
var GetMeetingsResponse = require('./GetMeetingsResponse');
var GetRecordingsResponse = require('./GetRecordingsResponse');
var IsMeetingRunningResponse = require('./IsMeetingRunningResponse');
var joinMeetingResponse = require('./joinMeetingResponse');
var PublishRecordingsResponse = require('./PublishRecordingsResponse');
var SetConfigXMLResponse = require('./SetConfigXMLResponse');
var UpdateRecordingsResponse = require('./UpdateRecordingsResponse');

const classes = {
    ApiVersionResponse,
    DeleteRecordingsResponse,
    CreateMeetingResponse,
    EndMeetingResponse,
    GetDefaultConfigXMLResponse,
    GetMeetingInfoResponse,
    GetMeetingsResponse,
    GetRecordingsResponse,
    IsMeetingRunningResponse,
    joinMeetingResponse,
    PublishRecordingsResponse,
    SetConfigXMLResponse,
    UpdateRecordingsResponse
};

function dynamicClass (name) {
    return classes[name];
}
module.exports=dynamicClass;