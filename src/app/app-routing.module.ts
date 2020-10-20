import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutAppComponent } from './about-app/about-app.component';
import { ClientComponent } from './client/client.component';


const routes: Routes = [
{ path: 'clients', component: ClientComponent },
{ path: 'about', component: AboutAppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
