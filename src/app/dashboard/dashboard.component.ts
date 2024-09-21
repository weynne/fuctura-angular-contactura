import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MaterialModule,
    SharedModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
