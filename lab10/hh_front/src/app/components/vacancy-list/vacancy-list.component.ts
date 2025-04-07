import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Vacancy, Company } from '../../models/models';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],  
  providers: [ApiService],   templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  company: Company | null = null;
  companyId: number = 0;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.companyId = +params['id'];
      this.loadCompany();
      this.loadVacancies();
    });
  }

  loadCompany(): void {
    this.apiService.getCompany(this.companyId).subscribe(
      (data: Company) => {
        this.company = data;
      },
      error => {
        console.error('Error fetching company details:', error);
      }
    );
  }

  loadVacancies(): void {
    this.apiService.getVacanciesByCompany(this.companyId).subscribe(
      (data: Vacancy[]) => {
        this.vacancies = data;
      },
      error => {
        console.error('Error fetching vacancies:', error);
      }
    );
  }
}