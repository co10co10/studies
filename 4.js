function daice (x,z) {
    let total = 0;
    for (let i = 1; i <= x; i++) {
        let sai = Math.floor(Math.random() * z) + 1;
        console.log(sai);
        total += sai;
    }
    return total;
}
console.log(daice(10,7));