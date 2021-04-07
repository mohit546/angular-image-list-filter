import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filter = '';
  listOfFilters = [];
  imageList = [
    { title: 'cars 1', path: '../assets/cars/1.jpg', category: 'cars' },
    { title: 'cars 2', path: '../assets/cars/2.jpg', category: 'cars' },
    { title: 'cars 3', path: '../assets/cars/3.jpg', category: 'cars' },
    { title: 'cars 4', path: '../assets/cars/4.jpg', category: 'cars' },
    { title: 'cars 5', path: '../assets/cars/5.jpg', category: 'cars' },
    { title: 'cars 6', path: '../assets/cars/6.jpg', category: 'cars' },
    { title: 'cars 7', path: '../assets/cars/7.jpg', category: 'cars' },
    { title: 'sports 1', path: '../assets/sports/1.jpg', category: 'sports' },
    { title: 'sports 2', path: '../assets/sports/2.jpg', category: 'sports' },
    { title: 'sports 3', path: '../assets/sports/3.jpg', category: 'sports' },
    { title: 'sports 4', path: '../assets/sports/4.jpg', category: 'sports' },
    { title: 'sports 5', path: '../assets/sports/5.jpg', category: 'sports' },
    { title: 'sports 6', path: '../assets/sports/6.jpg', category: 'sports' },
    { title: 'sports 7', path: '../assets/sports/7.jpg', category: 'sports' }
  ];

  ngOnInit(): void {
    this.listOfFilters = this._generateFilterList(this.imageList, 'category');
  }

  updateFilter(filter) {
    this.filter = filter;
  }

  _generateFilterList(list, filterKey) {
    let filters = {};
    list.forEach(element => {
      filters[element[filterKey]] = true;
    });
    return Object.keys(filters);
  }
}
