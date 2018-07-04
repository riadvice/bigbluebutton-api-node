var TestCase=require('../TestCase');
var IsMeetingRunningParameters =require('../../src/Parametres/IsMeetingRunningParametres');
var assert = require('assert');
class IsMeetingRunningParametersTest extends TestCase
{
    testIsMeetingRunningParameters()
{
    var meetingId       = this.faker.random.uuid();
    var isRunningParams = new IsMeetingRunningParameters(meetingId);
    try{
    assert.equal(meetingId, isRunningParams.getMeetingId());
        console.log('Test Meeting Running Passed.');
    } catch (error) {
        console.error('Test Meeting Running Failed.');
    }
    // Test setters
    var newId =  this.faker.random.uuid();
        try{
    isRunningParams.setMeetingId(newId);
    assert.equal(newId, isRunningParams.getMeetingId());
            console.log('Test setters Meeting Running Passed.');
        } catch (error) {
            console.error('Test setters Meeting Running Failed.');
        }
}
}
module.exports=IsMeetingRunningParametersTest;