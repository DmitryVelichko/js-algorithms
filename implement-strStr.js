let strStr = function(string, substring) {
    if(substring === '') return 0
    for(let i=0;i<=string.length - substring.length; i++){
        let j = 0;
        for(; j < substring.length; j++) {
            if(substring[j] !== string[i + j]) break
    