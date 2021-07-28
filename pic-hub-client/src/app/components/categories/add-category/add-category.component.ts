import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryTitle: string

  constructor(public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories();
  }

  addCategory() {
    if (this.categoryTitle) {
      if (this.categoryService.isCategoryExist(this.categoryTitle)) {
        alert('This category already exists!');
      }
      else {
        let newCategory = new Category(this.categoryTitle);
        this.categoryService.addCategory(newCategory);
      }
    }
  }
}
