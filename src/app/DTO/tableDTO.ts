export class tableDTO{
    id_tournament : number = 0;
    id_team : number = 0;
    points : number = 0;
    played : number = 0;
    win : number = 0;
    draw : number = 0;
    lose : number = 0;
    goals_f : number = 0;
    goals_a : number = 0;
    difference  : number = this.goals_f-this.goals_a;
}