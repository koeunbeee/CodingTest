function solution(numLog) {
    var answer = '';
    for (let i=0; i<numLog.length; i++){
        switch(numLog[i+1]){
            case numLog[i]+1:
                answer+="w"
                break;
            case numLog[i]-1:
                answer+="s"
                break;
            case numLog[i]+10:
                answer+="d"
                break;
            case numLog[i]-10:
                answer+="a"   
                break;
        }
    }
    return answer;
}