function solution(n) {
    var answer = [];
    let i = n;
    while(i !== 1){
        answer.push(i)
        if(i%2===0){
            i /= 2
        } else if(i%2===1){
            i=3*i+1
        }
    }
    answer.push(1)
    return answer;
}