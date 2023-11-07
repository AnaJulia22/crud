import { CoursesService } from './../services/courses.service';
import { Course } from './../model/course';
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
    courses: Course[] = [];
    displayedColumns = ['name', 'category'];

    coursesService: CoursesService;

    constructor() {
      this.coursesService = new CoursesService();
      this.courses = this.coursesService.list();
    }
}
