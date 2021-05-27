import { tableDTO } from './../DTO/tableDTO';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8888/table';

  getTableByTournamentId(id_tournament : number){
    return this.http.get<tableDTO[]>(`${this.url}/${id_tournament}`);
  }
}
