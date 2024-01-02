function solution(ineq, eq, n, m) {
    var answer = 0;
    
    eval(`${n} ${ineq}${eq==="="?"=":""} ${m}`) ? answer = 1:0;
    
    return answer;
}