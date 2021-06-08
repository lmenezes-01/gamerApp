import { Component, OnInit } from '@angular/core'; 
 
@Component({ 
  selector: 'app-xbox', 
  templateUrl: './xbox.page.html',
  styleUrls: ['./xbox.page.scss'],  
}) 
export class XboxPage implements OnInit { 
 
  constructor() { } 

  option = { 
   slidesPerView: 1.5,
   centeredSlides: true,
   loop: true,
   spaceBetween: 10,
   autoplay: true,
   }
   ngOnInit(){
     
   }
   
 
} 
