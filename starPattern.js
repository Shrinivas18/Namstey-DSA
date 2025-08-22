/* 2️⃣ Star Pattern

Pattern:

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/

function starPattern(n) {
    if(n>1){
    let pattern = "";

    for (let i = 1; i <= n; i++){
        for (let j = i; j < n; j++){
            pattern += " ";
        }
        for (let k = 1; k <= i; k++) {
            pattern += "*"
        }
        for (let l = 2; l <= i; l++){
            pattern += "*"
        }
        pattern += "\n";
    }
    for (let i = 1; i < n; i++){
        for (let j = 1; j <= i; j++){
            pattern += " ";
        }
        for (let k = i; k < n; k++){
            pattern += "*";
        }
        for (let l = i+1; l < n; l++){
            pattern += "*";
        }
        pattern += "\n";
    }

    return pattern;
    }
    else{
        return "For printing star pattern input should be greater than 1";
    }
}

console.log(starPattern(5))