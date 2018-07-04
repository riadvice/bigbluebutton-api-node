var TestCase=require('../TestCase');
var GetRecordingsParameters =require('../../src/Parametres/GetRecordingsParametres');
var assert = require('assert');
class GetRecordingsParametersTest extends TestCase
{
    testGetRecordingsParameters()
{    var meetingId = this.faker.random.uuid();
    var recordId = this.faker.random.uuid();
    var getRecordings = new GetRecordingsParameters();
    getRecordings.setMeetingId(meetingId);
    getRecordings.setRecordId(recordId);
    getRecordings.setState('published');

    var meta ='name';
    var name = this.faker.name.firstName();
    getRecordings.addMeta(meta,name);
    var params = getRecordings.getHTTPQuery();

    try{
    assert.equal(meetingId, getRecordings.getMeetingId());
    assert.equal(recordId, getRecordings.getRecordId());
    assert.equal('published', getRecordings.getState());
    assert.equal(name, params['meta_'+meta]);
        console.log('Test Get Recordings Passed.');
    } catch (error) {
        console.error('Test Get Recordings Failed.');
    }
}
}
module.exports=GetRecordingsParametersTest;