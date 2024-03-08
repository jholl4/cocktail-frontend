import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {

  postUser = {
    createdAt: "",
    id: "",
    job: "",
    name: ""


  }
  
  user = {avatar: "https://reqres.in/img/faces/2-image.jpg",
              email: "janet.weaver@reqres.in",
              first_name: "Janet",
              id: 2,
              last_name:  "Weaver"};

  baseUrl: string = 'https://reqres.in/api/users/'

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.getUser('2');
    this.createUser({
      'name': 'Tester McGee',
      'job': 'Testing'
    });
    this.updateUser('3', {
      'name': 'Hacker McGee',
      'job': 'Hacking'
    });
    this.deleteUser('3');

  }

  // creates a form group
  // takes in an object containing one field per property
  // property array params: initial value, validators(1 or more)
  getFormGroup = this.fb.group({
    getid: ['', Validators.required]
  });
  
  get getId() {
    return this.getFormGroup.get('getid');
  }
  
  // a form group for our post request
  postFormGroup = this.fb.group({
    postName: ['', Validators.compose([Validators.required,
                                        Validators.minLength(1),
                                      Validators.maxLength(20)])],
    postJob: ['', Validators.compose([Validators.required,
                                        Validators.minLength(5),
                                      Validators.maxLength(25)])]
    
  });

  get postName() {
    return this.postFormGroup.get('postName');
  }
  get postJob() {
    return this.postFormGroup.get('postJob');
  }

  


  // get a single user based on id
  getUser(userid: string) {
    this.http.get<any>(this.baseUrl + userid, { observe: 'response'}).subscribe({
      // for successful responses
      next : data => {
      console.log(data);
      this.user = data.body.data;
      },
      // for error responses
      error: err => console.log(err),
      // executes upon a completed subscription
      complete: () => console.log('Get user operation complete!')
    })
  }

  // create a single user
  // POST takes 3 params: URL, body, options
  createUser(user: {}) {
    this.http.post<any>(this.baseUrl, user, {observe: 'response'}).subscribe({
      next : data => this.postUser = data.body.data,
      error: err => console.log(err),
      complete: () => console.log('Create/POST user operation complete!')
    })
  }

  // update a single user
  // also 3 params
  updateUser(id: string, user: {}) {
    this.http.put<any>(this.baseUrl + id, user, {observe: 'response'}).subscribe({
      next : data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log('Update/PUT user operation complete!')
    })
  }

  // delete a single user
  deleteUser(id: string) {
    this.http.delete<any>(this.baseUrl + id, {observe: 'response'}).subscribe({
      next : data => console.log(data),
      error: err => console.log(err),
      complete: () => console.log('Delete user operation complete!')
    })
  }

}
