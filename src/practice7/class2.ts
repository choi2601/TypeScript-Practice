interface Person {
    name: string;
    say(message: string): void;
}

interface Programmer {
    writeCode(requirement: string): string;
}



abstract class Korean implements Person {
    public abstract jumin: number;

    constructor(public name: string) {

    }
    say(msg: string) {
        console.log(msg);
    }

    abstract loveKimchi(): void;
}

class KoreanProgrammer extends Korean implements Person {
    constructor(public name: string, public jumin: number) {
        super(name);
    }
    say(message: string): void {
        console.log(message);
    }
    writeCode(requirement: string): string {
        console.log(requirement);
        return requirement
    }
    loveKimchi(): void {
        console.log('love, Kimchi');
    }
}

const jay = new KoreanProgrammer('jay', 22);
// const jay2 = new Korean('jay');