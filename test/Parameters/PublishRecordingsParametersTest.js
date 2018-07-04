var TestCase=require('../TestCase');
var PublishRecordingsParameters =require('../../src/Parametres/PublishRecordingsParametres');
var assert = require('assert');
class PublishRecordingsParametersTest extends TestCase
{
    testPublishRecordingsParameters()
{
    var recordingId      =  this.faker.random.uuid();
    var publish          = this.faker.random.boolean();
    var publishRecording = new PublishRecordingsParameters(recordingId, publish);
    try{
    assert.equal(recordingId, publishRecording.getRecordingId());
    assert.equal(publish, publishRecording.isPublish());
        console.log('Test Publish Recordings Passed.');
    } catch (error) {
        console.error('Test Publish Recordings Failed.');
    }
    // Test setters that are ignored by the constructor
    var newRecordingId= this.faker.random.uuid();
    var published= this.faker.random.boolean();
        try{
    publishRecording.setRecordingId(newRecordingId);
    publishRecording.setPublish(published);
    assert.equal(newRecordingId, publishRecording.getRecordingId());
    assert.equal(published, publishRecording.isPublish());
            console.log('Test setters Publish Recordings Passed.');
        } catch (error) {
            console.error('Test setters Publish Recordings Failed.');
        }
}
}
module.exports=PublishRecordingsParametersTest;