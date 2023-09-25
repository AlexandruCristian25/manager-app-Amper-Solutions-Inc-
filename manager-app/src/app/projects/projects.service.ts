import { Injectable } from "@angular/core";
import { Project } from "./project.model";
import { Person } from "../shared/person.model";
import { PeopleService } from "../people-list/people.service";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ProjectsService {

    projectsListChanged = new Subject<Project[]>();

    private projects: Project[] = [];
    // private projects: Project[] = [
    //     new Project(
    //       'Project One',
    //       'Project one description testing...',
    //       [
    //         new Person('Ioana', 159, 'ioana@company.com'),
    //         new Person('Alexandru', 410, 'alexandru@company.com'),
    //         new Person('Madalina', 200, 'madalina@company.com')
    //       ]
    //       ),
    //     new Project(
    //       'Project Two',
    //       'Project two description testing...',
    //       [
    //         new Person('Constantin', 76, 'constantin@company.com'),
    //         new Person('Alexandra', 180, 'alexandra@company.com'),
    //         new Person('Diana', 15, 'diana@company.com')
    //       ]
    //       ),
    //   ];

    constructor(private peopleSrv: PeopleService) {}

    getAllProjects() {
        return this.projects.map(p => p);
    }

    getProjectByIndex(index: number) {
      return this.projects[index];
    }

    addAllPeople(persons: Person[]) {
      this.peopleSrv.addGroupToList(persons);
    }

    updateProjectAtIndex(i: number, project: Project) {
      this.projects[i] = project;
      this.projectsListChanged.next(this.getAllProjects());
    }

    addNewProject(project: Project) {
      this.projects.push(project);
      this.projectsListChanged.next(this.projects.map(p => p));
    }

    deleteProject(i: number) {
      this.projects.splice(i, 1);
      this.projectsListChanged.next(this.projects.map(p => p));
    }

    setProjects(projects: Project[]) {
      this.projects = projects;
      this.projectsListChanged.next(this.projects.map(p => p));
    }
}
