import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-businessreg',
  templateUrl: './businessreg.component.html',
  styleUrls: ['./businessreg.component.css'] 
})
export class BusinessregComponent {
  business_form : FormGroup; 
  selectedFiles: File[] = [];
constructor(private fb: FormBuilder){
this.business_form = this.fb.group({
lname: [''],
fname: [''],
mname: [''],
gender: [''],
birthdate: [''],
email: [''],
phone: [''],
position: [''],
pass: [''],
conf_pass: [''],
document: [[]],
}); 
}
onFileSelected(event: any) {
  let files: FileList = event.target.files;
  if (files) {
    this.selectedFiles = [];

    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files.item(i) as File);
    }
  }
  console.log(this.selectedFiles); 
}


}
