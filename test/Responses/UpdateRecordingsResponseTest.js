var UpdateRecordingsResponse=require('../../src/Responses/UpdateRecordingsResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class UpdateRecordingsResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.update=new UpdateRecordingsResponse(fs.readFileSync('./updateRecordingsData.xml', 'utf8'));
    }
   testUpdateUpRecordingsResponseContent()
{
    try{
    assert.equal('SUCCESS', this.update.getReturnCode());
    assert.equal('true', this.update.getIsUpdated());
    console.log('Test date Recordings Response Passed.');
} catch (error) {
    console.error('Test date Recordings Response Failed.');
}
}

}
module.exports=UpdateRecordingsResponseTest;