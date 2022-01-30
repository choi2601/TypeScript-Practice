const myTV = {
    turnOn: () => {
        return true;
    },
    turnOff: () => {
    }
};
function tryTurnOn(tv) {
    tv.turnOn();
}
tryTurnOn(myTV);
function ajaxSignup(data) {
}
ajaxSignup({
    email: '1234@naver.com',
    id: 'choi',
    password: '1234',
});
function createBoard() {
    const cells = [];
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 3; col++) {
            cells.push({
                row,
                col
            });
        }
    }
    return cells;
}
const board = createBoard();
board[0].piece = {
    move(from, to) {
        return true;
    }
};
//# sourceMappingURL=interface.js.map