import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { User } from 'src/app/class/user';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-area-admin-list-user',
  templateUrl: './personal-area-admin-list-user.component.html',
  styleUrls: ['./personal-area-admin-list-user.component.css']
})
export class PersonalAreaAdminListUserComponent implements OnInit {

  @Input() emailInWeb: string;
  @Output() viewUser=new EventEmitter();
  @Output() viewOrder=new EventEmitter();

  listUser: Array<User>

  numberViewUsers: number = 10;
  pageIndex: number = 1;

  constructor(private gbService:GioielleriaBuonaiutoService, private router:Router) { }

  ngOnInit(): void {
    this.gbService.getAllUsers().subscribe(data => {
      this.listUser = data;
    })
  }

  passToPageUser(email:string){
    this.viewUser.emit(email)
  }

  passToPageOrder(email:string){
    this.viewOrder.emit(email)
  }

}
