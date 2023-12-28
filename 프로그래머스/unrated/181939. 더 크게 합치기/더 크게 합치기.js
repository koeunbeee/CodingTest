function solution(a, b) {
    var answer = 0;
    let aData = a.toString() + b.toString();
    let bData = b.toString() + a.toString();

    aData > bData ? 
        answer = parseInt(aData):
        answer = parseInt(bData); 
    
    return answer;
}