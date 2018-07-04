class Attendee {
    constructor(xml) {
        this.userId = xml.userID._text;
        this.fullName = xml.fullName._text;
        this.role = xml.role._text;
        this.isPresenter = xml.isPresenter._text;
        this.isListeningOnly = xml.isListeningOnly._text;
        this.hasJoinedVoice = xml.hasJoinedVoice._text;
        this.hasVideo = xml.hasVideo._text;
    }

    getUserId() {
        return this.userId;
    }

    getFullName() {
        return this.fullName;
    }

    getRole() {
        return this.role;
    }

    /**
     * @return bool
     */
    getIsPresenter() {
        return this.isPresenter;
    }

    /**
     * @return bool
     */
    getIsListeningOnly() {
        return this.isListeningOnly;
    }

    /**
     * @return bool
     */
    getHasJoinedVoice() {
        return this.hasJoinedVoice;
    }

    /**
     * @return bool
     */
    getHasVideo() {
        return this.hasVideo;
    }
}
module.exports=Attendee;