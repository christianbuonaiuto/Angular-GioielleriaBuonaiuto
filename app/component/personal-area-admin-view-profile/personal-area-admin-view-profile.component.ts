import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/class/user';
import { FormGroup, FormControl } from '@angular/forms';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';

@Component({
  selector: 'app-personal-area-admin-view-profile',
  templateUrl: './personal-area-admin-view-profile.component.html',
  styleUrls: ['./personal-area-admin-view-profile.component.css']
})
export class PersonalAreaAdminViewProfileComponent implements OnInit {

  @Input() emailUser: string;
  @Input() emailInWeb: string;
  @Output() changePageViewProfile= new EventEmitter();


  user: User;
  modify: boolean;
  superAdmin= "bntcrs96c30i872a@studenti.unical.it";

  editUserForm = new FormGroup({
    phoneUser: new FormControl(),
    addressUser: new FormControl(),
    postalCodeUser: new FormControl(),
    roleUser: new FormControl()
  })

  constructor(private gbService:GioielleriaBuonaiutoService) { }

  ngOnInit(): void {
    this.gbService.getUser(this.emailUser).subscribe(data => {
      this.user = data;
      this.modify = false;
      this.editUserForm.patchValue({phoneUser: this.user.phonenumber});
      this.editUserForm.patchValue({addressUser: this.user.streetaddress});
      this.editUserForm.patchValue({postalCodeUser: this.user.postalcode});
      this.editUserForm.patchValue({roleUser: this.user.admin});
    })
  }

  canModify(){
    this.modify = true;
  }

  notChange():boolean{
    if(this.user.phonenumber === this.editUserForm.value.phoneUser &&
      this.user.streetaddress === this.editUserForm.value.addressUser &&
      this.user.postalcode === this.editUserForm.value.postalCodeUser &&
      this.user.admin === this.editUserForm.value.roleUser){
      return true;
    }
    return false;
  }

  backView(){
    this.modify = false;
  }

  edit(){
    if(this.notChange()){
      this.modify = false;
      return;
    }
    this.user.phonenumber = this.editUserForm.value.phoneUser;
    this.user.streetaddress = this.editUserForm.value.addressUser;
    this.user.postalcode = this.editUserForm.value.postalCodeUser;
    this.user.admin = this.editUserForm.value.roleUser;
    this.gbService.editPhoneAddressPostalCode(this.user).subscribe();
    this.gbService.editRole(this.user).subscribe();
    alert("Utente "+ this.user.email +" modificato correttamente.");
    this.editUserForm.patchValue({phoneUser: this.user.phonenumber});
    this.editUserForm.patchValue({addressUser: this.user.streetaddress});
    this.editUserForm.patchValue({postalCodeUser: this.user.postalcode});
    this.editUserForm.patchValue({roleUser: this.user.admin});
    this.modify = false;
  }

  backToListUser(){
    this.changePageViewProfile.emit();
  }
}
