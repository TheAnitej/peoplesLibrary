import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-images',
  templateUrl: './display-images.component.html',
  styleUrl: './display-images.component.css'
})
export class DisplayImagesComponent implements OnInit {
  @Input() visible!: boolean;
  @Input() data!: any;

  
  responsiveOptions: any[] | undefined;

  constructor() {}

  ngOnInit() {
    
  }

    showDialog() {
        this.visible = true;
    }


    // products!: any[];



       
    

   
}
