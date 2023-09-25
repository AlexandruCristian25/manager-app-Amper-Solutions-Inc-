import { Injectable, EventEmitter } from "@angular/core";
import { Person } from "../shared/person.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PeopleService {

    private people: Person[] = [
        new Person('Andreea', 615, 'andreea@company.com'),
        new Person('Bianca', 615, 'bianca@company.com'),
        new Person('Mihaela', 615, 'mihaela@company.com')
    ];
    peopleListChanged = new Subject<Person[]>();

    personEdit = new Subject<number>();

    constructor() {}

    getAllPersons() {
        return this.people.map(p => p);

    }

    addPerson(person: Person) {
      this.people.push(person);
      this.peopleListChanged.next(this.people.map(p => p));
    }

    addGroupToList(persons: Person[]) {
      this.people.push(...persons);
      this.peopleListChanged.next(this.people.map(p => p));
    }

    getPersonFromIndex(i: number) {
        return this.people[i];
    }

    editPersonAtIndex(i: number, person: Person) {
      this.people[i] = person;
      this.peopleListChanged.next(this.people.map(p => p));
    }

    deletePerson(i: number) {
      this.people.splice(i, 1);
      this.peopleListChanged.next(this.people.map(p => p));
    }
}
