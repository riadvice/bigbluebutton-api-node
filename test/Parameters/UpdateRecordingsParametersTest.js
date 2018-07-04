var TestCase=require('../TestCase');
var assert = require('assert');
class UpdateRecordingsParametersTest extends TestCase
{
    testUpdateRecordingsParameters()
{
    var params                 = super.generateUpdateRecordingsParams();
    var updateRecordingsParams = super.getUpdateRecordingsParamsMock(params);
    try{
    assert.equal(params.recordingId, updateRecordingsParams.getRecordingId());
    assert.equal(params.meta_presenter, updateRecordingsParams.getMeta('presenter'));
        console.log('Test Update Rescordings Passed.');
    } catch (error) {
        console.error('Test Update Rescordings Failed.');
    }
    // Test setters
    var newId=this.faker.random.uuid();
        try{
    updateRecordingsParams.setRecordingId(newId);
    assert.equal(newId, updateRecordingsParams.getRecordingId());
            console.log('Test setters Update Rescordings Passed.');
        } catch (error) {
            console.error('Test setters Update Rescordings Failed.');
        }
}
}
module.exports=UpdateRecordingsParametersTest;