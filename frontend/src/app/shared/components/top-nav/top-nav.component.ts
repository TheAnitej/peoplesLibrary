import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit{
  sidebarVisible : boolean = false;
  username = 'Anitej'

constructor(private route: ActivatedRoute, private router: Router){

}
navItems: any;

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.sidebarVisible = !(this.router.url === '/login/login' || this.router.url === '/signup');
    });
    this.navItems= [
      { name: 'Dashboard', route: '/books', icon: 'dashboard', call:'' },
      { name: 'Messages', route: '/messages', icon: 'messages',call:'' },
      { name: 'Settings', route: '/settings', icon: 'settings',call:'' },
      { name: 'Support', route: '/support', icon: 'contact_support',call:'' },
      { name: 'Signout', route: '/login', icon: 'logout',call:'logout()'},
    ];
  }
  badgevisible = false;

  badgevisibility() {
    this.badgevisible = true;
  }

  logout(){
    if(sessionStorage.getItem('token')){
      sessionStorage.removeItem('token');
    }
    this.router.navigate(['/login'])
  }


}
