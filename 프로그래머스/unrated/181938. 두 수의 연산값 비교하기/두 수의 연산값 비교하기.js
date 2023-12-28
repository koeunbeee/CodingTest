function solution(a, b) {
    var answer = 0;
    let aData = a.toString() + b.toString();
    let bData = a * b * 2;

    aData > bData ? 
        answer = parseInt(aData):
        answer = parseInt(bData); 
    
    return answer;
}