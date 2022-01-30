var StarbuksGrade;
(function (StarbuksGrade) {
    StarbuksGrade["WELCOME"] = "WELCOME";
    StarbuksGrade["GREEN"] = "GREEN";
    StarbuksGrade["GOLD"] = "GOLD";
})(StarbuksGrade || (StarbuksGrade = {}));
function getDiscound(v) {
    switch (v) {
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
//# sourceMappingURL=enum.js.map