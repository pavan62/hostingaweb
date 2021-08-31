import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackComponent } from './black/black.component';
import { WhiteComponent } from './white/white.component';

const routes: Routes = [{
  path:'',redirectTo:'auth',pathMatch:'full'
}
  ,{

  path:'auth',component:BlackComponent
},
{
  path:'white',component:WhiteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
