let normal = require("./normal");

function calculate_time() {
    var time = normal.calculate_time();
    var arr = time.split("-");
    var total_days = (parseFloat(arr[0]) * 365) + (parseFloat(arr[1] * 30) + parseFloat(arr[2]));
    var remainder_days = total_days % (365 * 7);
    var quantum_year = (total_days - remainder_days) / (365 * 7);
    var remainder_days2 = remainder_days % (30 * 7);
    var quantum_month = (remainder_days - remainder_days2) / (30 * 7);
    var remainder_days3 = remainder_days2 % (1 * 7);
    var quantum_days = (remainder_days2 - remainder_days3) / (1 * 7);
    arr[0] = quantum_year;
    arr[1] = quantum_month;
    arr[2] = quantum_days;
    return arr;

}

module.exports = {calculate_time};
