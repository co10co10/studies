// // let items=[1,1,2,3,4,5,6];
// // let random = Math.floor(Math.random() * items.length);
// // console.log(items[random]);
//
// let sai = function () {
//     return parseInt(Math.floor(Math.random() * 6 +1));
// }
// // let getsai = function (ssucces) {
// //     let sai = [];
// // }
// let sum = 0;
// for (let saikoro = 0; saikoro < 3; saikoro++ ) {}
// //     sum += saikoro;
// //     if (saikoro <=1){
// //         break;
// // }
//
// console.log(sum);
function daice () {
    let total = 0;
    for (let i = 1; i <= 3; i++) {
        let sai = Math.floor(Math.random() * 6) + 1;
        console.log(sai);
        total += sai;
    }
    return total;
}
    console.log(daice());