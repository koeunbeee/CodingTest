function solution(l, r) {
    var answer = [];
    for(let i=l; i<=r; i++){
        if (/^[05]+$/.test(i)) {
            answer.push(i);
        } 
    }
    answer.length === 0 ? answer.push(-1) : answer
    return answer;
}