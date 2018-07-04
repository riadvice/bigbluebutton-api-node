var Base = require('./BaseParametres');
    class joinMeetingParameteres extends Base{
        constructor(meetingId, username, password) {
            super();
            this.meetingId = meetingId;
            this.username  = username;
            this.password  = password;
        }

       getMeetingId()
        {
            return this.meetingId;
        }
        setMeetingId(meetingId)
        {
            this.meetingId = meetingId;
            return this;
        }
        getUsername()
        {
            return this.username;
        }
        setUsername(username)
        {
            this.username = username;
            return this;
        }
        getPassword()
        {
            return this.password;
        }
       setPassword(password)
        {
            this.password = password;
            return this;
        }
        getUserId()
        {
            return this.userId;
        }
         setUserId(userId)
        {
            this.userId = userId;
            return this;
        }
        getWebVoiceConf()
        {
            return this.webVoiceConf;
        }
        setWebVoiceConf(webVoiceConf)
        {
            this.webVoiceConf = webVoiceConf;
            return this;
        }

        getCreationTime()
        {
            return this.creationTime;
        }
       setCreationTime(creationTime)
        {
            this.creationTime = creationTime;
            return this;
        }
        getConfigToken()
        {
            return this.configToken;
        }
        setConfigToken(configToken)
        {
            this.configToken = configToken;
            return this;
        }
        getAvatarURL()
        {
            return this.avatarURL;
        }
        setAvatarURL(avatarURL)
        {
            this.avatarURL = avatarURL;
            return this;
        }
        isRedirect()
        {
            return this.redirect;
        }
        setRedirect(redirect)
        {
            this.redirect = redirect;
            return this;
        }
        getClientURL()
        {
            return this.clientURL;
        }
        setClientURL(clientURL)
        {
            this.clientURL = clientURL;
            return this;
        }
        getHTTPQuery()
        {
            return super.buildHTTPQuery(
                {
                    'meetingID': this.meetingId,
                    'fullName': this.username,
                    'password': this.password,
                    'userID': this.userId,
                    'webVoiceConf': this.webVoiceConf,
                    'createTime': this.creationTime,
                    'configToken': this.configToken,
                    'avatarURL': this.avatarURL,
                    'redirect': this.redirect, /* ? 'true' : 'false',*/
                    'clientURL': this.clientURL
                }
        );
        }
    }
module.exports=joinMeetingParameteres;