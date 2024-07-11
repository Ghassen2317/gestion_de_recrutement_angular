import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsableRHService } from 'src/app/services/responsable-rh.service';

@Component({
  selector: 'app-rhlist',
  templateUrl: './rhlist.component.html',
  styleUrls: ['./rhlist.component.css'],
})
export class RhlistComponent implements OnInit {
  formData: any; // Recevoir les données via Input

  constructor(
    private route: ActivatedRoute,
    private responsableRhService: ResponsableRHService
  ) {}

  ngOnInit(): void {
    this.formData = history.state.formData;
    this.responsableRhService.getAllResponsablesRH().subscribe(
      (data) => {
        console.log('Fetched all responsables RH:', data);
      },
      (error) => {
        console.error('Error fetching responsables RH', error);
      }
    );
  }
}
