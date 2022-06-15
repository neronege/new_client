import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { BackendService } from '../backendservice';

@Component({
  selector: 'app-catgories-edit',
  templateUrl: './catgories-edit.component.html',
  styleUrls: ['./catgories-edit.component.css']
})
export class CatgoriesEditComponent implements OnInit {

  constructor(public app:AppComponent) { }

  ngOnInit(): void {
  }
  newCategories() {

    this.app.service.getCategory().subscribe((data: any) => {
    this.app.categories = data;
    
    console.log(this.app.category)
   
    console.log(this.app.categories);
    })
  }
  updateClick(index:any,value:any){
  
     this.app.putClick(index,value);
     console.log(this.app.categories)
   }
   getId(index:any,value:any){   
    this.app.service.getById(index,value).subscribe(() =>{  
    this.app.category =value;
    console.log(value);
    console.log(this.app.category );
    });
  }
 

}
