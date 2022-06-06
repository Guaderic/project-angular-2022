import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  setDark:boolean;

  constructor(private service: AuthService) {
  }

  ngOnInit(): void {

  }


  logout() {
    this.service.logout()
  }


}
