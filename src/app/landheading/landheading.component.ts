import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'landheading',
  templateUrl: './landheading.component.html',
  styleUrls: ['./landheading.component.css']
})
export class LandheadingComponent {
constructor(private router: Router){}
public goToLog(){
  this.router.navigate(['Login']);
}
public goToSign(){
  this.router.navigate(['signup']); 
}
}
