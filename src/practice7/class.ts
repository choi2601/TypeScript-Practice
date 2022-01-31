interface User {
    name: string;
}
interface Product {
    id: string;
    price: number;
}

class Cart {
    // protected user: User;
    // private store: { id: User };

    constructor(public user: User, private store: { id: string }) { // 속성과 정의함과 동시에 생성자에서 바로 객체 프로퍼티에 할당
        // this.user = user;
        // this.store.id = user;
    }
    put(id: string, product: string) {
        this.store.id = product;
        this.get(id);
    }
    private get(id: string) {
        return this.store.id;
    }
}

class PromotionCart extends Cart {
    addPromotion() {
        this.user
    }
}
const cart2 = new PromotionCart({ name: 'john' }, { id: 'a' });

// const cartJohn = new Cart({ name: 'john' });
// const cartJay = new Cart({ name: 'jay' });