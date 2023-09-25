import { Person } from 'src/app/shared/person.model';

export class Project {
    public name: string;
    public description: string;
    public persons: Person[];

    constructor(name: string, description: string, persons: Person[]) {
        this.name = name;
        this.description = description;
        this.persons = persons;
    }
}
