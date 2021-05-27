import { tableDTO } from './../DTO/tableDTO';
import { tournamentDTO } from './../DTO/tournamentDTO';
import { matchDTO } from './../DTO/matchDTO';
import { MatchService } from './../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  match: matchDTO = new matchDTO();
  matchs: matchDTO[] = [];
  tournament: tournamentDTO = new tournamentDTO();
  tournaments: tournamentDTO[] = [];
  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getTournaments().subscribe(data => {
      this.tournaments = data;
    }) 
  }
  registerMatch(match: matchDTO){
    this.matchService.createMatch(match).subscribe(data => {
      alert("Se registro con exito el Partido!");
    })
    /**TODO
     *  1. Buscar tabla de puntos por id_equipo en el partido registrado
     *      SI existe ... usar updateTable para ambos equipos
     *      NO existe...  usar registerTable para crear la tabla de ambos o del que haga falta
     *  2. 
     */
  }
  registerTournament(tournament: tournamentDTO){
    this.matchService.createTournament(tournament).subscribe(data => {
      alert("Se registro con exito el Partido!");
    })
  }
  
  registerTable(table: tableDTO){
    this.matchService.createTable(table).subscribe(data => {
      alert("Se registro con exito el Equipo!");
    })  
  }
  updateTable(table: tableDTO){
    this.matchService.updateTable(table).subscribe(data => {
      alert("Se registro con exito el Equipo!");
    }) 
  }
  displayedColumns: string[] = ['id_tournament', 'name_tournament', 'date_start_tournament', 'date_end_tournament'];
}
