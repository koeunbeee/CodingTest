function solution(my_string, overwrite_string, s) {
    var answer = '';
    let stringLength = overwrite_string.length;
    let a = my_string.substring(0,s) + overwrite_string;
    let b = my_string.substring(s + overwrite_string.length);
    
    answer = a+b;

    return answer;
}