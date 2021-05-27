import { teamDTO } from './../DTO/teamDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8888/team';

  getTeams(){
    return this.http.get<teamDTO[]>(this.url);
  }
  createTeam(team: teamDTO){
    const requestOptions: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    console.log("En el meotodo registrar llega:"+team.city_team);
    return this.http.post<teamDTO>(`${this.url}/add`,team, requestOptions);
  }
}
