function solution(a, d, included) {
    var answer = 0;
    let ary = [];
    ary[0] = a;
    for(let i=0;i<included.length;i++){
        ary[i+1] = ary[i] + d
        
        if(included[i] === true){
            answer += ary[i] 
        }
    }
    return answer;
}