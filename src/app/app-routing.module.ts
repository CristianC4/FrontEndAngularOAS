import { IndexComponent } from './index/index.component';
import { TableComponent } from './table/table.component';
import { MatchComponent } from './match/match.component';
import { TeamComponent } from './team/team.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'team', component: TeamComponent},
  {path: 'match', component: MatchComponent},
  {path: 'table', component: TableComponent},
  {path: '', component: IndexComponent, children:[{ path:'**', component: IndexComponent}]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
