import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from '../shared/person.model';
import { PeopleService } from './people.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit, OnDestroy {
  people: Person[];
  peopleSub: Subscription;

  constructor(private peopleSrv: PeopleService) {}

  ngOnInit(): void {
    this.people = this.peopleSrv.getAllPersons();
    this.peopleSub = this.peopleSrv.peopleListChanged.subscribe((list: Person[]) => {
      this.people = list;
    })
  }

  ngOnDestroy(): void {
    this.peopleSub.unsubscribe();
  }

  onEditPerson(i: number) {
    this.peopleSrv.personEdit.next(i);
  }

}
