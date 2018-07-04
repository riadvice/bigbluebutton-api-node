var GetRecordingsResponse=require('../../src/Responses/GetRecordingsResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class GetRecordingsResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.records=new GetRecordingsResponse(fs.readFileSync('D:/workspace/bigbluebutton-api-node/tests/Data/getRecordingsData.xml', 'utf8'));
    }

   testGetRecordingResponseContent()
{   try{
    assert.equal('SUCCESS', this.records.getReturnCode());
    assert.equal(6, this.records.getRecords().length);
    var aRecord = this.records.getRecords()[4];
    // console.log(aRecord);
    assert.equal('9d287cf50490ca856ca5273bd303a7e321df6051-4-119[0]', aRecord.getMeetingId());
    assert.equal('f71d810b6e90a4a34ae02b8c7143e8733178578e-1462980100026', aRecord.getRecordId());
    assert.equal('SAT- Writing Section- Social Science and History (All participants)', aRecord.getName());
    assert.equal('true', aRecord.getIsPublished());
    assert.equal('published', aRecord.getState());
    assert.equal(1462980100026, aRecord.getStartTime());
    assert.equal(1462986640649, aRecord.getEndTime());
    assert.equal('presentation', aRecord.getPlaybackType());
    assert.equal('http://test-install.blindsidenetworks.com/playback/presentation/0.9.0/playback.html?meetingId=f71d810b6e90a4a34ae02b8c7143e8733178578e-1462980100026', aRecord.getPlaybackUrl());
    assert.equal(86, aRecord.getPlaybackLength());
    console.log('Test Get Recordings Response Passed.');
} catch (error) {
    console.error('Test Get Recordings Response Failed.');
}
}
    testRecordMetadataContent()
{   try{
    var metas = this.records.getRecords()[4].getMetas();
    assert.equal('moodle-mod_bigbluebuttonbn (2015080611)', metas['bbb-origin-tag']);
    console.log('Test Meta data Content Response Passed.');
} catch (error) {
    console.error('Test Meta data Content Response Failed.');
}
}

}
module.exports=GetRecordingsResponseTest;