module.exports = function check(str, bracketsConfig) {
    var oc = "(", cc = ")", os = "[", cs = "]", l = "|", of = "{", cf = "}";
    var ocCount = 0, osCount = 0, lCount = 0, ofCount = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == oc) {
            ocCount++;
        }
        else if (str[i] == os) {
            osCount++;
        }
        else if (str[i] == l) {
            lCount++;
        }
        else if (str[i] == of) {
            ofCount++;
        }


        else if (str[i] == cc) {
            ocCount--;
            if (ocCount < 0) {
                return false;
            }
        }
        else if (str[i] == cs) {

            osCount--;
            if (osCount < 0) {
                return false;
            }
        }
        else if (str[i] == cf) {
            ofCount--;
            if (ofCount < 0) {
                return false;
            }
        }
    }
    if (osCount == 0 && ocCount == 0 && ofCount == 0 && (lCount % 2 == 0)) {
        return true;
    }
    return false;
}
