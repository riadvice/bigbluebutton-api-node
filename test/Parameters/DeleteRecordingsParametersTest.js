var DeleteRecordingsParameters =require('../../src/Parametres/DeleteRecordingsParametres');
var TestCase=require('../TestCase');
var assert = require('assert');
class DeleteRecordingsParametersTest extends TestCase
{
    testDeleteRecordingParameter()
{
    var recordingId     = this.faker.random.uuid();

    var deleteRecording = new DeleteRecordingsParameters(recordingId);
    try{
    assert.equal(recordingId, deleteRecording.getRecordingId());
        console.log('Test Delete Recordings Passed.');
    } catch (error) {
        console.error('Test Delete Recordings Failed.');
    }
    // Test setters
    var record = this.faker.random.uuid();
    try{
    deleteRecording.setRecordingId(record);
        assert.equal(record,deleteRecording.getRecordingId());
    console.log('Test setters Delete Recordings Passed.');
} catch (error) {
    console.error('Test setters Delete Recordings Failed.');
}
}
}
module.exports=DeleteRecordingsParametersTest;