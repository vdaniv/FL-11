class Fighter {
    constructor(object) {
        this.getName = () => object.name
        this.getDamage = () => object.damage
        this.getHealth = () => object.hp
        this.getAgility = () => object.agility
        this.heal = HpPoint => {
            let health = this.getHealth();
            object.hp += HpPoint;
            if (object.hp > health) {
                object.hp = health;
            }

        }
        this.Win = 0
        this.Loss = 0
        this.dealDamage = damage => {
            object.hp -= damage
            if (object.hp < 0) {
                object.hp = 0
            }

        }
        this.addWin = () => ++this.Win
        this.addLoss = () => ++this.Loss
    }

    attack(fighter) {
        if (Math.random() * 100 < 100 - fighter.getAgility()) {
            fighter.dealDamage(this.getDamage())
            console.log(`${this.getName()} make ${this.getDamage()} damage to ${fighter.getName()}. 
${fighter.getName()} hp: ${fighter.getHealth()} `);
        } else {
            console.log(`${fighter.getName()} attack missed`)
        }

    }
    logCombatHistory() {
        console.log(`Name: ${this.getName()}, Wins: ${this.Wins}, Losses: ${this.Losses}`)
    }
}


function battle(fighter1, fighter2) {

    while (fighter1.getHealth() > 0 || fighter2.getHealth() > 0) {
        if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter1.attack(fighter2)
        }

        if (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
            fighter2.attack(fighter1)
        }

        if (fighter1.getHealth() <= 0) {
            fighter2.addWin()
            fighter1.addLoss()
            console.log(`${fighter2.getName()} win. ${fighter1.getName()} is dead. `)
            break;

        } else if (fighter2.getHealth() <= 0) {
            fighter1.addWin()
            fighter2.addLoss()
            console.log(`${fighter1.getName()} win. ${fighter2.getName()} is dead. `)
            break;
        }
    }
}

const myFighter1 = new Fighter({ name: 'Vandam', damage: 20, hp: 100, agility: 25 });
const myFighter2 = new Fighter({ name: 'Shvarc', damage: 35, hp: 100, agility: 45 });

battle(myFighter1, myFighter2);