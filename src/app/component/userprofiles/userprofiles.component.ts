import { Component, OnInit } from '@angular/core';
import { UserprofilesService } from "../../service/userprofiles.service"
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-userprofiles',
  templateUrl: './userprofiles.component.html',
  styleUrls: ['./userprofiles.component.css']
})
export class UserprofilesComponent implements OnInit {
 public  form: FormGroup;
  isLoading = false;
  mode : String="" ;
  constructor(private _userprofile : UserprofilesService) {

   }

  ngOnInit() {
    this._userprofile.getUserprofile();

    this.form = new FormGroup({
      fname: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      lname: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      avatar: new FormControl(null, { validators: [Validators.required] }),
     
    });
  }

  onSaveProfile() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this._userprofile.addUserprofile(
        this.form.value.fname,
        this.form.value.lname,
        this.form.value.avatar,
        this.form.value.phone,
        this.form.value.email
      );
    } else {
      this._userprofile.addUserprofile(

        this.form.value.fname,
        this.form.value.lname,
        this.form.value.avatar,
        this.form.value.phone,
        this.form.value.email
        
      );
    }
    this.form.reset();
  }

}
