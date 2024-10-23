/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack1 = [];
    if (s.length == 1) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        console.log(stack1[stack1.length - 1]);
        if (s[i] == '(') {
            stack1.push(s[i]);
            continue;
        }
        else if (s[i] == '[') {
            stack1.push(s[i]);
            continue;
        }
        else if (s[i] == '{') {
            stack1.push(s[i]);
            continue;
        } // push // pop1

        if (stack1.length > 0) { // Verifica se a pilha não está vazia
            if (s[i] == ')' && stack1[stack1.length - 1] == '(') {
                stack1.pop();
            }
            else if (s[i] == ']' && stack1[stack1.length - 1] == '[') {
                stack1.pop();
            }
            else if (s[i] == '}' && stack1[stack1.length - 1] == '{') {
                stack1.pop();
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    }

    if (stack1.length == 0) {
        return true;
    }
    return false;

};


console.log(isValid(")(){}"))