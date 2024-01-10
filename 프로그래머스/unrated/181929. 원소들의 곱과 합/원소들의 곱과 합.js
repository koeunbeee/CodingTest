function solution(num_list) {
    var answer = 0;
    let multiplication = 1;
    let squared = 0;
    
    for(let i=0; i<num_list.length; i++) {
        multiplication *= num_list[i];
        squared += num_list[i];
    }
    
    multiplication < squared*squared ? 
        answer=1 : answer=0;

    return answer;
}