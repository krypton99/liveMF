import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BongDaComponent } from './livemf/bongda.component';
import { XemchungThemComponent } from './livemf/xemchung-them.component';
import { XemchungXemComponent } from './livemf/xemchung-xem.component';
import { QuanlyTrangchuComponent } from './livemf/quanly-trangchu.component';
import { QuanlyProfileComponent } from './livemf/quanly-profile.component';
import { FlatpickrModule, FlatpickrDefaults} from 'angularx-flatpickr';
import * as flatpickr from "flatpickr"
const routes: Routes = [
  {path: 'xemchung',component:XemchungThemComponent},
  {path:'bongda',component:BongDaComponent},
  {path:'xemchung-room',component:XemchungXemComponent},
  {path:'quanly-trangchu',component:QuanlyTrangchuComponent},
  {path:'quanly-profile',component:QuanlyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FlatpickrModule],
  exports: [RouterModule,FlatpickrModule]
  
})
export class AppRoutingModule { }
export const routingComponents=[XemchungThemComponent,BongDaComponent,XemchungXemComponent,QuanlyTrangchuComponent,QuanlyProfileComponent]
