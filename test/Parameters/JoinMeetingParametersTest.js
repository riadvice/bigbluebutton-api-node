var TestCase=require('../TestCase');
var assert = require('assert');
class JoinMeetingParametersTest extends TestCase
{
    testJoinMeetingParameters()
{
    var params            = super.generateJoinMeetingParams();
    var joinMeetingParams = super.getJoinMeetingMock(params);
    try{
    assert.equal(params.meetingId, joinMeetingParams.getMeetingId());
    assert.equal(params.userName, joinMeetingParams.getUsername());
    assert.equal(params.password, joinMeetingParams.getPassword());
    assert.equal(params.userId, joinMeetingParams.getUserId());
    assert.equal(params.webVoiceConf, joinMeetingParams.getWebVoiceConf());
    assert.equal(params.creationTime, joinMeetingParams.getCreationTime());
        console.log('Test Join Meeting Passed.');
    } catch (error) {
        console.error('Test Join Meeting Failed.');
    }
    // Test setters that are ignored by the constructor
    var newId = this.faker.random.uuid();
    var newName =  this.faker.name.firstName();
    var newPassword = this.faker.internet.password();
    var configToken = this.faker.random.hexaDecimal;
    var avatarUrl =this.faker.internet.url();
    var redirect = this.faker.random.boolean();
    var clientUrl = this.faker.internet.url();
        try{
    joinMeetingParams.setMeetingId(newId );
    joinMeetingParams.setUsername(newName );
    joinMeetingParams.setPassword(newPassword );
    joinMeetingParams.setConfigToken(configToken );
    joinMeetingParams.setAvatarURL(avatarUrl);
    joinMeetingParams.setRedirect(redirect );
    joinMeetingParams.setClientURL(clientUrl );
    assert.equal(newId, joinMeetingParams.getMeetingId());
    assert.equal(newName, joinMeetingParams.getUsername());
    assert.equal(newPassword, joinMeetingParams.getPassword());
    assert.equal(configToken, joinMeetingParams.getConfigToken());
    assert.equal(avatarUrl, joinMeetingParams.getAvatarURL());
    assert.equal(redirect, joinMeetingParams.isRedirect());
    assert.equal(clientUrl, joinMeetingParams.getClientURL());
            console.log('Test setters Join Meeting Passed.');
        } catch (error) {
            console.error('Test setters Join Meeting Failed.');
        }
}
}
module.exports=JoinMeetingParametersTest;