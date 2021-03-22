import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Teste SoftPlan';  
  constructor(private authService: AuthService, private tokenStorageService: TokenStorageService) { }
  ngOnInit(){
    this.authService.getToken().subscribe(data => {      
      this.tokenStorageService.saveToken(data)
    });    
  }
}