export function numberWithCommas(x) {
    // return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}