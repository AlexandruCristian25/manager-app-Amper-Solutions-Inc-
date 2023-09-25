import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Person } from 'src/app/shared/person.model';
import { PeopleService } from '../people.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css']
})
export class PeopleEditComponent implements OnInit, OnDestroy {
  @ViewChild('form1', {static: false}) form1: NgForm;

  personSubscription: Subscription;
  personIndex: number;
  editMode = false;
  editedPerson: Person;

  constructor(private peopleSrv: PeopleService) {}

  ngOnInit(): void {
    this.personSubscription = this.peopleSrv.personEdit.subscribe(i => {
      this.personIndex = i;
      this.editMode = true;
      this.editedPerson = this.peopleSrv.getPersonFromIndex(this.personIndex);
      this.form1.setValue({
        name: this.editedPerson.name,
        email: this.editedPerson.email,
      });
    });
  }

  onSubmit(form: NgForm) {
    const formValue = form.value;
    const person = new Person(formValue.name, 417, formValue.email);
    if(this.editMode) {
      this.peopleSrv.editPersonAtIndex(this.personIndex, person);
    } else {
      this.peopleSrv.addPerson(person);
    }

    this.editMode = false;
    form.reset();
  }

  onFormReset() {
    this.form1.reset();
    this.editMode = false;
  }

  onItemDelete() {
    this.peopleSrv.deletePerson(this.personIndex);
    this.onFormReset();
  }

  ngOnDestroy(): void {
    this.personSubscription.unsubscribe();
  }
}
