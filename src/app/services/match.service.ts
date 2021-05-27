import { tableDTO } from './../DTO/tableDTO';
import { tournamentDTO } from './../DTO/tournamentDTO';
import { matchDTO } from './../DTO/matchDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(private http: HttpClient) { }
  urlMatch = 'http://localhost:8888/match';
  urlTournament = 'http://localhost:8888/tournament';
  urlTable = 'http://localhost:8888/table';
  createMatch(match: matchDTO){
    const requestOptions: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    return this.http.post<matchDTO>(`${this.urlMatch}/add`,match, requestOptions);
  }
  createTournament(tournament : tournamentDTO){
    const requestOptions: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    return this.http.post<tournamentDTO>(`${this.urlTournament}/add`,tournament, requestOptions);
  }
  getTournaments(){
    return this.http.get<tournamentDTO[]>(this.urlTournament);
  }
  createTable(table: tableDTO){
    const requestOptions: Object = {
      headers: new HttpHeaders(),
      responseType: 'text'
    }
    return this.http.post<tableDTO>(`${this.urlTable}/add`,table, requestOptions);
  }
  updateTable(table: tableDTO){
    return this.http.put<tableDTO>(`${this.urlTable}/update`,table)
  }
}
