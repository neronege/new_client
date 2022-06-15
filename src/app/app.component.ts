import { Component, OnInit } from '@angular/core';

import { BackendService } from './backendservice';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  
  title= 'new_project';

  public categories: Array<any> = [];
  
  public category: any = null;
  public newCategory :any = {
    title: "",
    description: "",
    password: "",
    rePassword: ""
  };
 
  constructor(public service: BackendService) {

  }

  ngOnInit(): void {
 
  }
  getId(index:any,value:any){
    this.service.getById(index,value).subscribe(() =>{  
    this.category =value;
 
    console.log(this.category );
    });
  }
 
  readCategories() {

    this.service.getCategory().subscribe((data: any) => {
    this.categories = data;
    this.category = this.categories[0]
    console.log(this.category)
    console.log(this.newCategory);
    console.log(this.categories);
    })
  }
 

  getClick() {
    
    this.readCategories();
  }

  putButton(index:any,value:any) {
  
  
    this.getId(index,value);
    this.category= value;
    this.category.id = index;
    
  }
    
  putClick(index:any, value:any){

    this.service.putCategory(this.category.id, this.category).subscribe(() => {
      this.readCategories();
    });
  }
  postClick() {
  
    this.service.postCategory(this.newCategory).subscribe((data:any) => {
    this.newCategory =data;
    this.newCategory.id= data.id;
    this.newCategory.title = data.title;
    this.newCategory.description = data.description;
    this.newCategory.password = data.password;
    this.newCategory.rePassword = data.rePassword;
     }); 
     this.readCategories();
  }
  deleteClick(index:any) {
  
    this.service.deleteCategory(index).subscribe(() =>{
      this.readCategories();
      console.log(this.categories)
    });
  }

}



