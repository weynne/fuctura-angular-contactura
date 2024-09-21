import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MaterialModule } from '../material/material.module';
import { DaoService } from './services/dao.service';



@NgModule({
  declarations: [
    MenuComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    LogoutComponent
  ],
  providers: [
    DaoService
  ]
})
export class SharedModule { }