import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  private apiUrl = 'http://localhost:3000'; // URL ของ Backend
  message: string = '';
  user: any;

  ngOnInit(){
    this.getUserFromLocalStorage();
  }

  getUserFromLocalStorage(): void{
    const userData = localStorage.getItem('user');
    if(userData) {
      this.user = JSON.parse(userData);
    } else {
      this.user = null;
    }
  }

  constructor(private http: HttpClient, private router: Router) {}

  logout() {
    const token = localStorage.getItem('token');
    if (token){
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.router.navigateByUrl("login");
      
    }
    else if (!token) {
      console.error('No token found');
      this.message = 'No token found. Please log in again.';
      return;
    }

    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${token}`,
    // });
  }
}
