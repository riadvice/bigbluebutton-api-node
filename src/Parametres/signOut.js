function signOut(returnCode) {
    this.returnCode = returnCode;
}

signOut.prototype.getReturnCode=function(){ return this.returnCode;};
module.exports=signOut;