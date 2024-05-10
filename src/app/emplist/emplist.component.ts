import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
  employees: Employee[] = [
    {
      id: 1,
      fullName: 'Lianne Reyes',
      gender: 'Female',
      email: 'llreyes1@student.hau.edu.ph',
      employmentStatus: 'Employed',
      salary: '$5000',
      image: '/assets/kirby.gif',
    },
    {
      id: 2,
      fullName: 'Coleen Masbang',
      gender: 'Female',
      email: 'cdmasbang@student.hau.edu.ph',
      employmentStatus: 'Employed',
      salary: '$5000',
      image: '/assets/col.gif',
    },
    {
      id: 3,
      fullName: 'Alyssa Evangelista',
      gender: 'Female',
      email: 'acevangelista@student.hau.edu.ph',
      employmentStatus: 'Employed',
      salary: '$5000',
      image: '/assets/aly.gif',
    },
    {
      id: 4,
      fullName: 'Mica Tolentino',
      gender: 'Female',
      email: 'cgtolentino@student.hau.edu.ph',
      employmentStatus: 'Employed',
      salary: '$5000',
      image: '/assets/mica.gif',
    },
  ];
}

@NgModule({
  declarations: [EmplistComponent],
  exports: [EmplistComponent],
  imports: [CommonModule]
})
export class EmplistModule {}