import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProjectsService } from "../projects/projects.service";
import { Project } from "../projects/project.model";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient, private prjService: ProjectsService) {}

  saveProjectsToDb() {
    const projects = this.prjService.getAllProjects();
    this.http.put(
      'https://manager-app-2eb3c-default-rtdb.europe-west1.firebasedatabase.app/projects.json',
      projects)
      .subscribe(res => {

      });
  }

  getProjectsFromDb() {
    const token = localStorage.getItem('token');

    this.http
    .get<Project[]>(`https://manager-app-2eb3c-default-rtdb.europe-west1.firebasedatabase.app/projects.json?auth=${token}`)
    .pipe(map(projects => {
      return projects.map(project => {
        project.persons = project.persons ? project.persons : [];
        return project;
      });
    }))
    .subscribe(projects => {
      this.prjService.setProjects(projects);
    });
  }


}
