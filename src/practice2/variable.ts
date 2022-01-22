// function outer() {

//     if(true) {
//         var score = 0; 
//     }

//     for(var i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 100);
//     }
//     console.log(score);
// }

// function outer() {

//     if(true) {
//         let score = 0; 
//     }

//     for(let i = 0; i < 3; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, 100);
//     }
//     console.log(score);
// }

(function test() {
    // let score = 30; number type

    // let score; any type
    
    let score: number;

    // const score: number = 30;

    score = 30;

    // score = "30"; type error

    for(let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
})();

