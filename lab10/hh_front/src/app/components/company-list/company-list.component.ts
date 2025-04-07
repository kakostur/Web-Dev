import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Company } from '../../models/models';
import { ApiService } from '../../services/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],  
  providers: [ApiService],  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.apiService.getCompanies().subscribe(
      (data: Company[]) => {
        this.companies = data;
      },
      error => {
        console.error('Error fetching companies:', error);
      }
    );
  }

  viewCompanyDetails(companyId: number): void {
    this.router.navigate(['/companies', companyId]);
  }
}