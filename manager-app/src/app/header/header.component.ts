import { DataService } from '../shared/data.service';
import { AuthService } from './../auth.service';
import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  isAuthenticated = false;

  constructor(private authSrv: AuthService, private dataService: DataService) {}

  ngOnInit(): void {
    this.authSrv.token.subscribe(res => {
      if(res) {
        this.getData();
        this.isAuthenticated = true;
      } else {
        this.isAuthenticated = false;
      }
    })

  }

  doLogin() {
    this.authSrv.logIn();
  }

  doLogout() {
    this.authSrv.logOut();
    this.isAuthenticated = false;

  }

  saveData() {
    this.dataService.saveProjectsToDb();
  }

  getData(){
    this.dataService.getProjectsFromDb();
  }

}
