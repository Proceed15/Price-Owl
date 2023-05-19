import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(public searchService: SearchService) { }

ngOnInit(): void {

  this.searchService.searchItensReset();
}
}
