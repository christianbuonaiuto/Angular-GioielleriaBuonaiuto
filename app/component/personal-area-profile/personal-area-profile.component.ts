import { Component, OnInit, Input } from '@angular/core';
import { GioielleriaBuonaiutoService } from 'src/app/gioielleria-buonaiuto.service';
import { User } from 'src/app/class/user';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-area-profile',
  templateUrl: './personal-area-profile.component.html',
  styleUrls: ['./personal-area-profile.component.css']
})
export class PersonalAreaProfileComponent implements OnInit {
  @Input() emailUser: string;

  user: User;
  modify: boolean;

  editUserForm = new FormGroup({
    phoneUser: new FormControl(),
    addressUser: new FormControl(),
    postalCodeUser: new FormControl()
  })

  constructor(private gbService:GioielleriaBuonaiutoService) { }

  ngOnInit(): void {
    this.gbService.getUser(this.emailUser).subscribe(data => {
      this.user = data;
      this.modify = false;
      this.editUserForm.patchValue({phoneUser: this.user.phonenumber});
      this.editUserForm.patchValue({addressUser: this.user.streetaddress});
      this.editUserForm.patchValue({postalCodeUser: this.user.postalcode});
    })
  }

  canModify(){
    this.modify = true;
  }

  notChange():boolean{
    if(this.user.phonenumber === this.editUserForm.value.phoneUser &&
      this.user.streetaddress === this.editUserForm.value.addressUser &&
      this.user.postalcode === this.editUserForm.value.postalCodeUser){
      return true;
    }
    return false;
  }

  edit(){
    if(this.notChange()){
      this.modify = false;
      return;
    }
    this.user.phonenumber = this.editUserForm.value.phoneUser;
    this.user.streetaddress = this.editUserForm.value.addressUser;
    this.user.postalcode = this.editUserForm.value.postalCodeUser;
    this.gbService.editPhoneAddressPostalCode(this.user).subscribe();
    alert("Hai modificato correttamente le tue informazioni.");
    this.editUserForm.patchValue({phoneUser: this.user.phonenumber});
    this.editUserForm.patchValue({addressUser: this.user.streetaddress});
    this.editUserForm.patchValue({postalCodeUser: this.user.postalcode});
    this.modify = false;
  }

}
