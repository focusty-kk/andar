/**
 * Created by yanghui on 2017/1/3.
 */
function whichFinger(n) {
    var finggerArr = ["Thumb", "Index finger", "Middle finger",
        "Ring finger", "Little finger"];
    if (n <= 5) {
        return finggerArr[n - 1];
    } else {
        if ((Math.ceil((n - 5) / 4)) % 2 == 1) {
            var tempNum1 = (n-5) % 4;
            switch (tempNum1) {
                case 2:
                    return finggerArr[2];
                case 3:
                    return finggerArr[1];
                case 0:
                    return finggerArr[0];
                case 1:
                    return finggerArr[3];
            }
        } else {
            var tempNum2 = (n-5) % 4;
            switch (tempNum2) {
                case 2:
                    return finggerArr[2];
                case 3:
                    return finggerArr[3];
                case 0:
                    return finggerArr[4];
                case 1:
                    return finggerArr[1];
            }
        }
    }
}