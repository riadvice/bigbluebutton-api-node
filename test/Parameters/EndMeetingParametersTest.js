var TestCase=require('../TestCase');
var EndMeetingParameters =require('../../src/Parametres/EndMeetingParametres');
var assert = require('assert');
class EndMeetingParametersTest extends TestCase
{
    testEndMeetingParameters()
{   var meetingId = this.faker.random.uuid();
    var password = this.faker.internet.password();
    var endMeetingParams = new EndMeetingParameters(meetingId, password );
    try{
    assert.equal(meetingId, endMeetingParams.getMeetingId());
    assert.equal(password, endMeetingParams.getPassword());
        console.log('Test End Meeting Passed.');
    } catch (error) {
        console.error('Test End Meeting Failed.');
    }
    // Test setters
        var newId = this.faker.random.uuid();
        var newPassword = this.faker.internet.password();
       try{
    endMeetingParams.setMeetingId(newId);
    endMeetingParams.setPassword(newPassword);
    assert.equal(newId, endMeetingParams.getMeetingId());
    assert.equal(newPassword, endMeetingParams.getPassword());
           console.log('Test setters End Meeting Passed.');
       } catch (error) {
           console.error('Test setters End Meeting Failed.');
       }
}
}
module.exports=EndMeetingParametersTest;