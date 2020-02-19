class Duck {

    flyBehavior;
    quackBehavior;


    performQuack() {
        this.quackBehavior.quack();
    }
    setFlyBehavior(flyBehavior) {
        this.flyBehavior = flyBehavior;
    }
    setQuackBehavior(quackBehavior) {
        this.quackBehavior = quackBehavior;
    }
    swim() {
        console.log("Mira como nado");
    }
    display() {

    }
    ormFly() {
        this.flyBehavior.fly();
    }

}

class MallarDuck extends Duck {

    display() {
        console.log("mírame pato mallar");
    }


}

class RedHeadDuck extends Duck {

    display() {
        console.log("Mira ese Pato rojo");
    }

}
class CauchoDuck extends Duck {
    display() {
        console.log("pato de caucho no sabe nadar");
    }

}
class CorchoDuck extends Duck {
    display() {
        console.log("pato de corcho solo sabe nadar");
    }
    class FlyWithWings {
        fly() {
            console.log("Vuelo alto");
        }
    }
    class FlyNoWay {
        fly() {
            console.log("No vuelo");
        }
    }
    class Quack {
        quack() {
            console.log("Hago quack quack");
        }
    }
    class Squeak {
        quack() {
            console.log("Hago squeak squeak");
        }
    }
    class MuteQuack {
        quack() {
            console.log("Calladito");
        }
    }
    class VolarConCohetes {
        fly() {
            console.log("Al infinito y mas allá");
        }
    }