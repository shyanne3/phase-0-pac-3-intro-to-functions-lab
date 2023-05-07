function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout() {
    console.log('HELLO'),('I can\'t hear you!');
    return "I can't hear you!"
}

function logWhisper() {
    console.log('hello'),('YES INDEED!');
    return "YES INDEED!"
} 



function sayHiToHeadphonedRoommate(string) {

      // recieves a string agrument and returns it back in all lowercase.
    if(string === string.toLowerCase()) {
        return 'I can\'t hear you!'
    
    } // recieves a string agrument and returns it back in all uppercase.
    if(string === string.toUpperCase()) { 
        return 'YES INDEED!' 
    } // recieves a string. "Let's have dinner together!" and returns a string, "I would love to!"
    if(string === "Let's have dinner together!") {
        return 'I would love to!'
    }
     
}    
