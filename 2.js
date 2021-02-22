const sei = "今井"
const mei = "道夫"
// console.log(mei + sei);

function main ({sei, mei})
{
    return mei+sei
}

// main(sei,mei)　これだと動かない
console.log(main({sei,mei}))

const name ={
    sei: "今井",
    mei: "道夫"
}
console.log(main(name))