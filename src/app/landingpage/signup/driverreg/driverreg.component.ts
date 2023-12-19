import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-driverreg',
  templateUrl: './driverreg.component.html',
  styleUrl: './driverreg.component.css'
})
export class DriverregComponent {
  driver_form : FormGroup; 
  selectedFiles: File[] = [];
constructor(private fb: FormBuilder){
this.driver_form = this.fb.group({
lname: [''],
fname: [''],
mname: [''],
gender: [''],
birthdate: [''],
email: [''],
phone: [''],
carType: [''],
plateNum: ['', [Validators.required, Validators.pattern('[A-Z]{2} \d{4}')]],
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
