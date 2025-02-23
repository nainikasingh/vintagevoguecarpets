import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RugsForLivingRoomComponent } from './rugs-for-living-room/rugs-for-living-room.component';

const routes: Routes = [
  {
    path:'home',
    component:HomepageComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'living-room-rugs',
    component:RugsForLivingRoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
