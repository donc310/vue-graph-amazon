
export function getEntryDateString() {
    var currentDate = new Date();
    var timestamp = currentDate.getTime();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var dateString = date + "-" + (month + 1) + "-" + year;
    return { date: dateString, timestamp: timestamp };
}
export function IsEqual(value, other) {
    // eslint-disable-next-line no-unused-vars
    var vm = this;
    var type = Object.prototype.toString.call(value);
    if (type !== Object.prototype.toString.call(other)) return false;
    if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;
    var valueLen =
        type === "[object Array]" ? value.length : Object.keys(value).length;
    var otherLen =
        type === "[object Array]" ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    var compare = function (item1, item2) {
        var itemType = Object.prototype.toString.call(item1);
        if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
            if (IsEqual(item1, item2)) return false;
        } else {
            if (itemType !== Object.prototype.toString.call(item2)) return false;
            if (itemType === "[object Function]") {
                if (item1.toString() !== item2.toString()) return false;
            } else {
                if (item1 !== item2) return false;
            }
        }
    };

    if (type === "[object Array]") {
        for (var i = 0; i < valueLen; i++) {
            if (compare(value[i], other[i]) === false) return false;
        }
    } else {
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                if (compare(value[key], other[key]) === false) return false;
            }
        }
    }
    return true;
}
export function formatDescription(description) {
    return description
        .map(data => {
            return data.content;
        }, 0)
        .toString();
}
export function formateNumber(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}