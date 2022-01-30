// enum StarbuksGrade {
//     WELCOME,
//     DDDD,
//     GREEN,
//     GOLD
// }
// enum StarbuksGrade {
//     WELCOME = 0,
//     DDDD = 3,
//     GREEN = 1,
//     GOLD = 2
// }
enum StarbuksGrade {
    WELCOME = "WELCOME",
    GREEN = "GREEN",
    GOLD = "GOLD"
}


function getDiscound(v: StarbuksGrade): number {
    switch(v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}

console.log(getDiscound(StarbuksGrade.GREEN));
console.log(StarbuksGrade.GREEN);
console.log(StarbuksGrade);