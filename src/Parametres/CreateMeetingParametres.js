var Buffer = require('buffer').Buffer;
 var MetaParameters = require('./MetaParameters');
var XMLWriter = require('xml-writer');
var Base=require('./BaseParametres');

class CreateMeetingParameteres extends MetaParameters {
     constructor(meetingId, meetingName) {
        super();
        this.meetingName = meetingName;
        this.meetingId = meetingId;
         this.presentations = {};
    //     this.attendeePassword = '';
    //     this.moderatorPassword = '';
    //     this.dialNumber = '';
    //     this.voiceBridge = '';
    //     this.webVoice = '';
    //     this.logoutUrl = '';
    //     this.record = '';
    //     this.duration = '';
    //     this.maxParticipants = '';
    //     this.autoStartRecording = '';
    //     this.allowStartStopRecording = '';
    //     this.welcomeMessage = '';
    //     this.moderatorOnlyMessage = '';
    //     this.webcamsOnlyForModerator = '';
    //     this.logo = '';
    //     this.copyright = '';
    //     this.muteOnStart = '';
    //
     }


    getMeetingId() {
        return this.meetingId;
    }

    setMeetingId(meetingId) {
        this.meetingId = meetingId;
        return this;
    }

    getMeetingName() {
        return this.meetingName;
    }

    setMeetingName(meetingName) {
        this.meetingName = meetingName;
        return this;
    }

    getAttendeePassword() {
        return this.attendeePassword;
    }

    setAttendeePassword(attendeePassword) {
        this.attendeePassword = attendeePassword;
        return this;
    }

    getModeratorPassword() {
        return this.moderatorPassword;
    }

    setModeratorPassword(moderatorPassword) {
        this.moderatorPassword = moderatorPassword;
        return this;
    }

    getDialNumber() {
        return this.dialNumber;
    }

    setDialNumber(dialNumber) {
        this.dialNumber = dialNumber;
        return this;
    }

    getVoiceBridge() {
        return this.voiceBridge;
    }

    setVoiceBridge(voiceBridge) {
        this.voiceBridge = voiceBridge;
        return this;
    }

    getWebVoice() {
        return this.webVoice;
    }

    setWebVoice(webVoice) {
        this.webVoice = webVoice;
        return this;
    }

    getLogoutUrl() {
        return this.logoutUrl;
    }

    setLogoutUrl(logoutUrl) {
        this.logoutUrl = logoutUrl;
        return this;
    }

    getMaxParticipants() {
        return this.maxParticipants;
    }

    setMaxParticipants(maxParticipants) {
        this.maxParticipants = maxParticipants;
        return this;
    }

    getIsRecorded() {
        return this.record;
    }

    setRecord(record) {
        this.record = record;
        return this;
    }

    getIsAutoStartRecording() {
        return this.autoStartRecording;
    }

    setAutoStartRecording(autoStartRecording) {
        this.autoStartRecording = autoStartRecording;
        return this;
    }

    getIsAllowStartStopRecording() {
        return this.allowStartStopRecording;
    }

    setAllowStartStopRecording(autoStartRecording) {
        this.allowStartStopRecording = autoStartRecording;
        return this;
    }

    getDuration() {
        return this.duration;
    }

    setDuration(duration) {
        this.duration = duration;
        return this;
    }

    getWelcomeMessage() {
        return this.welcomeMessage;
    }

    setWelcomeMessage(welcomeMessage) {
        this.welcomeMessage = welcomeMessage;
        return this;
    }

    getModeratorOnlyMessage() {
        return this.moderatorOnlyMessage;
    }

    setModeratorOnlyMessage(message) {
        this.moderatorOnlyMessage = message;
        return this;
    }

    getIsWebcamsOnlyForModerator() {
        return this.webcamsOnlyForModerator;
    }

    setWebcamsOnlyForModerator(webcamsOnlyForModerator) {
        this.webcamsOnlyForModerator = webcamsOnlyForModerator;
        return this;
    }

    getLogo() {
        return this.logo;
    }

    setLogo(logo) {
        this.logo = logo;
        return this;
    }

    getCopyright() {
        return this.copyright;
    }

    setCopyright(copyright) {
        this.copyright = copyright;
        return this;
    }

    getIsMuteOnStart() {
        return this.muteOnStart;
    }

    setMuteOnStart(muteOnStart) {
        this.muteOnStart = muteOnStart;
        return this;
    }

    getPresentations() {
        return this.presentations;
    }

    addPresentation(nameOrUrl, content = null) {
        if (content != null) {
            this.presentations[nameOrUrl] = Buffer.from(content).toString('base64');
        }


        return this;
    }

    /* ///// */
    //createMeetingParams
    getPresentationsAsXML() {
        var result = '';
        if (Object.keys(this.presentations).length !== 0) {
           var xml = new XMLWriter();
            xml.startDocument('1.0', 'UTF-8');
            // xml.endElement('modules');
            var module = xml.startElement('module').writeAttribute('name', 'presentation');

            // module.writeAttribute('name', 'presentation');

            for (const key of Object.keys(this.presentations)) {
                if (this.presentations[key] === true) {
                    module.startElement('document').writeAttribute('url', querystring.stringify(key));
                    xml.endElement();
                } else {
                    module.startElement('document').writeAttribute('name', key).text(this.presentations[key]);
                    xml.endElement();
                    // document[0] = this.presentations[key];
                }

            }
            xml.endElement();

            xml.endDocument();

            result = xml.output;


            return result;
        }
    }


    getHTTPQuery()
    {
    var b = new Base();
    var queries = {
        'name': this.meetingName,
        'meetingId': this.meetingId,
        'attendeePW': this.attendeePassword,
        'moderatorPW': this.moderatorPassword,
        'dialNumber': this.dialNumber,
        'voiceBridge': this.voiceBridge,
        'webVoice': this.webVoice,
        'logoutURL': this.logoutUrl,
        'record': this.record, //? 'true' : 'false'
        'duration': this.duration,
        'maxParticipants': this.maxParticipants,
        'autoStartRecording': this.autoStartRecording,//? 'true' : 'false'
        'allowStartStopRecording': this.allowStartStopRecording,//? 'true' : 'false'
        'welcome': this.welcomeMessage,
        'moderatorOnlyMessage': this.moderatorOnlyMessage,
        'webcamsOnlyForModerator': this.webcamsOnlyForModerator,//? 'true' : 'false'
        'logo': this.logo,
        'copyright': this.copyright,
        'muteOnStart': this.muteOnStart,
    };
    var meta=super.buildMeta(queries);

    return b.buildHTTPQuery(meta);// SUPPEERRR call !!
    }
}
module.exports=CreateMeetingParameteres;





