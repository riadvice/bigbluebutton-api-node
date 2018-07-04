var TestCase=require('../TestCase');
var assert = require('assert');

class SetConfigXMLParametersTest extends TestCase
{
    testSetConfigXMLParameters()
{
    var params             = super.generateSetConfigXMLParams();
    var setConfigXMLParams = super.getSetConfigXMLMock(params);
    try{
    assert.equal(params.meetingId, setConfigXMLParams.getMeetingId());
        console.log('Test Set XML Passed.');
    } catch (error) {
        console.error('Test Set XML Failed.');
    }
    // Test setters
    var newId =this.faker.random.uuid();
        try{
    setConfigXMLParams.setMeetingId(newId );
    assert.equal(newId, setConfigXMLParams.getMeetingId());
            console.log('Test setters Set XML Passed.');
        } catch (error) {
            console.error('Test setters Set XML Failed.');
        }
}
}
module.exports=SetConfigXMLParametersTest;