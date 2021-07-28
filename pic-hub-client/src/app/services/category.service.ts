import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

const URL: string = 'http://localhost:3069/api'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Category[];

  constructor(private httpClient: HttpClient) { }

  private getCategoriesFromServer(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(URL + '/categories');
  }

  getAllCategories() {
    this.getCategoriesFromServer().subscribe(data => {
      this.categories = data;
    });
  }

  isCategoryExist(categoryTitle: string) {
    let title = categoryTitle.toLowerCase();
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].title.toLowerCase() === title) {
        return true;
      }
    }
    return false;
  }

  addCategory(category: Category): void {
    this.httpClient.post(URL + '/add-category', category).subscribe(
      (data) => {
        console.log(data);
      }, (err) => {
        console.error(err);
      }, () => {
        alert('Category added successfully!');
        this.getAllCategories();
      });
  }
}
