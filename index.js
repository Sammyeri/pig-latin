
function isVowel(char){
    if(char.length == 1){
        var vowels = new Array("a", "e", "i", "o", "u");
        var isVowel = false;
        for(e in vowels) {
            if (vowels[e] == char){
                isVowel = true
            }
        }
        return isVowel;
    }
}
function translate (string){
    let setUp = string.toLowerCase();
    if(isVowel(setUp[0])){
        pigLatin = setUp + "way";
    } else {
        let i = 0;
        let firstLetter = "";
        while(!isVowel(setUp[i])){
            firstLetter = firstLetter + setUp[i];
            i++;
        }
        setUp = setUp.slice(i);
        i = 0;
        pigLatin = setUp + firstLetter + "ay";
        firstLetter = "";
    }
    return pigLatin;
}

module.exports = translate;