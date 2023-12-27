function solution(str1, str2) {
    var answer = '';
    
    for(i=0; i<str1.length; i++){
        answer += str1.substring(i,i+1) + str2.substring(i,i+1);
    }
        
    return answer;
