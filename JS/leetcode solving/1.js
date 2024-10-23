/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    let i = 0;
    let palavra = strs[0];
    if(strs.length == 0){
        return "";
    }
    if(strs.length == 1){
        return palavra;
    }
    let palavra2 = strs[1];
    let ans = "";
    for (i = 0; i < palavra.length; i++) {
        for(j = 0; j < strs.length; j++){
            if(palavra[i] !== strs[j][i]){
                return ans;
            }
        }
        ans+=palavra[i];

    }

    return ans;


};
