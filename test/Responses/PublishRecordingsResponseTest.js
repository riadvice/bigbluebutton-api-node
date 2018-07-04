var PublishRecordingsResponse=require('../../src/Responses/PublishRecordingsResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class PublishRecordingsResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.publish=new PublishRecordingsResponse(fs.readFileSync('D:/workspace/bigbluebutton-api-node/tests/Data/publishRecordingsData.xml', 'utf8'));
    }

    testPublishRecordingsResponseContent()
{
    try{
    assert.equal('SUCCESS', this.publish.getReturnCode());
    assert.equal('true', this.publish.isPublished());
        console.log('Test Publish Recording Response Passed.');
    } catch (error) {
        console.error('Test Publish Recording Response Failed.');
    }
}

}
module.exports=PublishRecordingsResponseTest;