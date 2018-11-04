function solution(A) {
    var maxSum = 0;
    var minSum = 0;
    var result = Number.POSITIVE_INFINITY;
    A.map((a) => {
        maxSum += a;
    })
    if(A.length == 1) { return Math.abs(A[0]) };
    if(A.length == 2) { return Math.abs(A[0]-A[1]) };
    for(var i=0; i<A.length; i++) {
        maxSum -= A[i];
        minSum += A[i];
        var diff = Math.abs(maxSum-minSum);
        if(diff < result) {
            result = diff;
        }
    }
    return result;
}