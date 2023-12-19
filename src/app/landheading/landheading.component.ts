import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'landheading',
  templateUrl: './landheading.component.html',
  styleUrls: ['./landheading.component.css']
})
export class LandheadingComponent {
constructor(private router: Router){}

public goToLog() : void{
  console.log('it works'); 
  this.router.navigate(['/landing/Login']); // Include 'landing' for the parent route
}

public goToSign() : void{
  this.router.navigate(['/landing/signup']); // Include 'landing' for the parent route
}
}
