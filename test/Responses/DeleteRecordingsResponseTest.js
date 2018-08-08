var DeleteRecordingsResponse=require('../../src/Responses/DeleteRecordingsResponse');
var TestCase=require('../TestCase');
var assert = require('assert');
var fs = require('fs');
class DeleteRecordingsResponseTest extends TestCase
{
    constructor()
    {
        super();
        this.delete=new DeleteRecordingsResponse(fs.readFileSync('./Data/deleteRecordingsData.xml', 'utf8'));
    }

    testDeleteRecordingsResponseContent()
{   try{
    assert.equal('SUCCESS', this.delete.getReturnCode());
    assert.equal('true', this.delete.isDeleted());
    console.log('Test Delete Recordings Response Passed.');
} catch (error) {
    console.error('Test Delete Recordings Response Failed.');
}
}


}
module.exports=DeleteRecordingsResponseTest;