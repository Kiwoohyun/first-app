import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {path: '',   redirectTo: `main-list`, pathMatch: 'full'},
  {path: 'main-list', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
