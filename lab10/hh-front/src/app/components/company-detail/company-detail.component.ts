import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../services/company.service';
import { VacancyService } from '../../services/vacancy.service';
import { Company } from '../../models/company';
import { Vacancy } from '../../models/vacancy';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent {
  company: Company | null = null;
  vacancies: Vacancy[] = [];

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
    private vacancyService: VacancyService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompany(id).subscribe(company => {
      this.company = company;
      this.vacancyService.getCompanyVacancies(id).subscribe(vacancies => {
        this.vacancies = vacancies;
      });
    });
  }
}
