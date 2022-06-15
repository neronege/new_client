import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { BackendService } from '../backendservice';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {


  constructor(public app : AppComponent ) {}

  ngOnInit(): void {
  
  }
  readCategories() {

    this.app.service.getCategory().subscribe((data: any) => {
    this.app.categories = data;
 
    console.log(this.app.category);
   
    console.log(this.app.categories);
    })
  }
 
}
