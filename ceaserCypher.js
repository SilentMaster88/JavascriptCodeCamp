function rot13(str) {
  let CCode;
  var codeArr = [], seq, final = "";
    for (var i = 0; i < str.length; i++) {
        CCode = str.charCodeAt([i]);
        if ((CCode > 64 && CCode < 78) || (CCode > 96 && CCode < 110)) {
            CCode += 13;
            codeArr.push(CCode);
        } else if ((CCode > 77 && CCode < 91) || (CCode > 109 && CCode < 123)){
            CCode -= 13;
            codeArr.push(CCode);
        } else { codeArr.push(CCode); }
    }
    console.log(codeArr);
    for (var j = 0; j < codeArr.length; j++) {
        final += String.fromCharCode(codeArr[j]);
    }
    return final;
}
