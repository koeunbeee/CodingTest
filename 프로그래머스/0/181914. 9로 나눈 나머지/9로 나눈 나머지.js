function solution(number) {
    var answer = 0;
    let num = number.split('');
    let sum = 0;
    for(let x of num){
        sum += x*1
    }
    answer = sum % 9
    return answer;
}