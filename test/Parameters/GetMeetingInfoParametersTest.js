var TestCase=require('../TestCase');
var GetMeetingInfoParameters =require('../../src/Parametres/GetMeetingInfoParametres');
var assert = require('assert');
class GetMeetingInfoParametersTest extends TestCase
{
    testGetMeetingInfoParameters()
{
    var meetingId = this.faker.random.uuid();
    var password = this.faker.internet.password();
    var getMeetingInfoParams = new GetMeetingInfoParameters(meetingId, password);
    try{
    assert.equal(meetingId, getMeetingInfoParams.getMeetingId());
    assert.equal(password, getMeetingInfoParams.getPassword());
        console.log('Test Get Meeting Info Passed.');
    } catch (error) {
        console.error('Test Get Meeting Info Failed.');
    }
    // Test setters that are ignored by the constructor
    var newId = this.faker.random.uuid();
    var newPassword = this.faker.internet.password();
        try{
   getMeetingInfoParams.setMeetingId(newId);
   getMeetingInfoParams.setPassword(newPassword);
    assert.equal(newId, getMeetingInfoParams.getMeetingId());
    assert.equal(newPassword, getMeetingInfoParams.getPassword());
            console.log('Test setters Get Meeting Info Passed.');
        } catch (error) {
            console.error('Test setters Get Meeting Info Failed.');
        }
}
}
module.exports=GetMeetingInfoParametersTest;