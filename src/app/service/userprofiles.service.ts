import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from "rxjs";
import { UserProfile } from "../models/userprofile.model"
import { Router } from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class UserprofilesService {
  private  url = "http://localhost:3000/api/profile/";
  private userprofile : UserProfile;
  private userprofileUpdated = new Subject<UserProfile[]>();
 
   constructor(private http : HttpClient , private router: Router) { 
     
   }
 
  public getUserprofile(){
     return this.http.get(this.url);
   }
 
   addUserprofile(fname: string,lname :string, email: string, phone:string, avatar: File) {
    const postData = new FormData();
    postData.append("fastname", fname);
    postData.append("lastname", lname);
    postData.append("avatar", avatar);
    postData.append("phone", phone);
    postData.append("email",  email);
    this.http
      .post<{ message: string; profile: UserProfile }>(
        this.url,
        postData
      )
      .subscribe(responseData => {
        this.router.navigate(["/"]);
      });
  }

  updatePost(id: string, fname: string,lname :string, email: string, phone:string, avatar: File | string) {
    let postData: UserProfile | FormData;
    if (typeof avatar === "object") {
      postData = new FormData();
      postData.append("fastname", fname);
      postData.append("lastname", lname);
      postData.append("avatar", avatar);
      postData.append("phone", phone);
      postData.append("email",  email);
    } else {
      postData = {
        id: id,
        FastName: fname,
        LastName: lname,
        Avatar: avatar,
        Phone: phone,
        Email : email
      };
    }
    this.http
      .put(this.url + id, postData)
      .subscribe(response => {
        this.router.navigate(["/"]);
      });
  }
}


