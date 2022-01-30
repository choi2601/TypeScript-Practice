interface TV {
  turnOn(): boolean;    
  turnOff(): void;
}

const myTV: TV = {
    turnOn: () => {
        return true;
    },
    turnOff: () => {
        
    }
}

function tryTurnOn(tv: TV) {
    tv.turnOn();

}
tryTurnOn(myTV);

interface Cell {
    row: number;
    col: number;
    piece?: Piece; //optional
}

interface SignUp {
    email: string;
    id: string;
    password: string;
}

function ajaxSignup(data: SignUp) {

}

ajaxSignup({
    email: '1234@naver.com',
    id: 'choi',
    password: '1234',
})

interface Piece {
    move(from: Cell, to: Cell): boolean;
}

function createBoard() {
    const cells: Cell[] = [];
    for(let row = 0; row < 4; row++) {
        for(let col = 0; col < 3; col++) {
            cells.push({
                row,
                col
            })
        }
    }
    return cells;
}

const board = createBoard();
board[0].piece = {
    move(from: Cell, to: Cell) {
        return true;
    }
}