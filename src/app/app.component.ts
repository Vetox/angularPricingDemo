import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPricingDemo';

  tiers=[
    {
      name : "Free",
      price : 0,
      storage:5,
      users:"Single User",
      unlimitedProjects:false,
      dedicatedSupport:false,
      freeDomain: false,
      unlimitedDomains: false,
      monthlyreports: false
    },
    {
      name : "Plus",
      price : 9,
      storage:5,
      users:"5 Users",
      unlimitedProjects:true,
      dedicatedSupport:true,
      freeDomain: true,
      unlimitedDomains: false,
      monthlyreports: false
    },
    {
      name : "Pro",
      price : 49,
      storage:150,
      users:"Unlimited Users",
      unlimitedProjects:true,
      dedicatedSupport:true,
      freeDomain: true,
      unlimitedDomains: true,
      monthlyreports: true
    }
  ]
  


}
