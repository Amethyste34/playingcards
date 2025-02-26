import { MonsterType } from "../utils/monster.utils";

export class Monster {

    id: number = -1;
    name: string = "My Monster";
    image: string = "assets/img/pikachu.png";
    type: MonsterType = MonsterType.ELECTRIC;
    hp: number = 60;
    figureCaption: string = "N°001 Monster";
    attackName: string = "Standard attack";
    attackStrength: number = 10;
    attackDescription: string = "This is a long description...";
    
}