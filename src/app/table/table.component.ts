import { TableService } from './../services/table.service';
import { tableDTO } from './../DTO/tableDTO';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  table : tableDTO = new tableDTO();
  tables : tableDTO[] = [];

  constructor(private service : TableService) { }

  ngOnInit(): void {
  }
  getTablePointsByTournament(id_tournament : number){
    this.service.getTableByTournamentId(id_tournament).subscribe(data => {
      this.tables = data;
    })
  }
}
