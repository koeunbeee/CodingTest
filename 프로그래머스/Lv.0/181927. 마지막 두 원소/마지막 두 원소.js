function solution(num_list) {
    var answer = num_list;
    let last = num_list[num_list.length-1];
    let beforeLast = num_list[num_list.length-2];
    
    if(last > beforeLast){
        answer.push(last - beforeLast)
       
    } else if(last <= beforeLast) {
        answer.push(last * 2)
    }
    
    return answer;
}