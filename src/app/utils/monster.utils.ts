export enum MonsterType {
    PLANT = "plant",
    ELECTRIC = "electric",
    FIRE = "fire",
    WATER = "water"
}

export interface IMonsterProperties {
    imageUrl: string;
    color: string;
}

export const MonsterTypeProperties: {[key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageUrl: 'assets/img/plant.png',
        color: 'rgb(135, 255, 124)'
    },
    [MonsterType.ELECTRIC]: {
        imageUrl: 'assets/img/electric.png',
        color: 'rgb(255, 255, 104)'
    },
    [MonsterType.FIRE]: {
        imageUrl: 'assets/img/fire.png',
        color: 'rgb(255, 104, 104)'
    },
    [MonsterType.WATER]: {
        imageUrl: 'assets/img/water.png',
        color: 'rgb(118, 235, 255)'
    },
}