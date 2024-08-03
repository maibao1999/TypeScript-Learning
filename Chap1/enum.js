var API_STATUS;
(function (API_STATUS) {
    API_STATUS["PENDDING"] = "pendding";
    API_STATUS["FULLFILED"] = "fullfiled";
    API_STATUS["REJECTED"] = "reject";
})(API_STATUS || (API_STATUS = {}));
var a = API_STATUS.FULLFILED;
var b = API_STATUS.PENDDING;
console.log('>>> a1 = ', a, '>>> a2 = ', b);
