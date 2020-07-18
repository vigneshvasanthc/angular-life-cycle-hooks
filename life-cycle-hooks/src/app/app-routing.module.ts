import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';


const routes: Routes = [
  { path: 'life-cycle-hooks', component:LifeCycleHooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
