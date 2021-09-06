import { Works } from "./Works";

export class Desenvolvedor {
  constructor(){
    this.id = 0;
    this.name = '';
    this.position = '';
  }
    id!: number;
    name!: string;
    position!: string;
    works!: Works[];
}
