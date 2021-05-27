import { TeamService } from './../services/team.service';
import { teamDTO } from './../DTO/teamDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: teamDTO = new teamDTO();
  teams: teamDTO[] = [];
  constructor(private teamService: TeamService) { 
  }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    })    
  }
  registerTeam(team: teamDTO){
    console.log(team);
    this.teamService.createTeam(team).subscribe(data => {
      alert("Se registro con exito el Equipo!");
    })
  }
  displayedColumns: string[] = ['id_team', 'name_team', 'date_team', 'country_team', 'city_team'];
}
