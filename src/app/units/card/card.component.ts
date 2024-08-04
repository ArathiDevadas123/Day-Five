import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  departments=[ 
    {
    id:1,
    Title:"BFS",
    Image:"https://static.vecteezy.com/ti/photos-gratuite/t2/25220125-image-une-captivant-scene-de-une-tranquille-lac-a-le-coucher-du-soleil-ai-generatif-photo.jpg",
    description:"This is bfs"
  },
  {
    id:2,
    Title:"cool",
    Image:"https://static.vecteezy.com/ti/photos-gratuite/t2/25220125-image-une-captivant-scene-de-une-tranquille-lac-a-le-coucher-du-soleil-ai-generatif-photo.jpg",
    description:"This is cool"
  },
  {
    id:3,
  Title:"happy",
  Image:"https://static.vecteezy.com/ti/photos-gratuite/t2/25220125-image-une-captivant-scene-de-une-tranquille-lac-a-le-coucher-du-soleil-ai-generatif-photo.jpg",
  description:"This is happy"
  },
  {
    id:4,
  Title:"smile",
  Image:"https://static.vecteezy.com/ti/photos-gratuite/t2/25220125-image-une-captivant-scene-de-une-tranquille-lac-a-le-coucher-du-soleil-ai-generatif-photo.jpg",
  description:"This is bfs"
  }

  ]
   
  

}


