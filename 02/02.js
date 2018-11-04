function solution(A) {
    var perm = 1;
    for(var i = 1; i <= A.length; i++) {
        if(A.indexOf(i) === -1) {
            perm = 0;
        }
    }
    return perm;
}