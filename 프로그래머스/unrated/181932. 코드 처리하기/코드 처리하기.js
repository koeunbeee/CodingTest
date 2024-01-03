function solution(code) {
    var answer = '';
    let mode = 0;
    let ret = '';
    
    //모드는 code[i] === 1 일때 반대로 뒤집힌다.
    for(i=0; i<code.length; i++){
        if(code[i] === "1"){
            if(mode === 0){
                mode = 1
            } else {
                mode = 0
            }
        }         
       // console.log(mode);
       // console.log(ret);
        if(code[i] !== "1"){
            if(mode === 0) {
                if(i%2 === 0) {
                    ret += code[i];
                }
            } else {
                if(i%2 !== 0){
                    ret += code[i];
                }
            }
        }
    }
    ret === "" ? 
        answer = "EMPTY" : 
                answer = ret;
    return answer;
}