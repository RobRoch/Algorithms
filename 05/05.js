function solution(A) {
    var len = A.length;
    var sum = (len + 1) * (len + 2) / 2;
    for (var i = 0; i < len; i++) {
        sum -= A[i];
    }
    return sum;
}