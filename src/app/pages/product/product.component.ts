import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product=[ 
    {
    id:1,
    Title:"Aerospace & Defence",
    Image:"https://www.aerospacecluster.nl/images/defence-and-space-product-branding-stage-image.jfif",
    description:"Aerospace and defense involves applying science and engineering to develop and manufacture aircraft and weapon systems, such as commercial planes, military jets, space shuttles, missiles, drones, etc. The A&D sector is divided into commercial and military segments."
  },
  {
    id:2,
    Title:"Banking & Finance Service(BFS)",
    Image:"https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg",
    description:"Banking industry is one of the key drivers of most economies because it channels funds to borrowers with productive investments."
  },
  {
    id:3,
  Title:"Healthcare",
  Image:"https://www.comparethemarket.com.au/wp-content/uploads/2021/09/health-care-Australia.jpg",
  description:"The healthcare industry encompasses a wide range of sectors that provide goods and services to treat patients. This includes things such as treating people, preventing illness, and providing rehabilitative medicine and palliative care."
  },
  {
    id:4,
  Title:"Insurance",
  Image:"https://programbusiness.com/wp-content/uploads/2018/10/personal_insurance-2.jpg",
  description:"The insurance sector is made up of companies that offer risk management in the form of insurance contracts. The basic concept of insurance is that one party, the insurer, will guarantee payment for an uncertain future event."
  },
  {
    id:5,
  Title:"Locomotive",
  Image:"https://wallup.net/wp-content/uploads/2015/12/4315-train-vintage-steam_locomotive-trees.jpg",
  description:"Locomotives are powered rail transport vehicles that provide motive power to trains with no payload capacity, and their only use is to pull the trains along tracks."
  },
  {
    id:6,
  Title:"Industrial",
  Image:"https://wallpaperaccess.com/full/3184364.jpg",
  description:"It is where power meets production,redefining manufacturing and energy"
  },
  {
    id:7,
  Title:"Mobility",
  Image:"https://rideamigos.com/wp-content/uploads/2018/06/smart-transportation-smart-city.png",
  description:"Mobility is defined as the ability to move freely or to be easily moved. The mobility industry refers not only to automotive but also to all the other industries that provide the vehicles and infrastructure for transportation."
  },
  {
    id:8,
  Title:"Learning Academy",
  Image:"https://images.ctfassets.net/p0qf7j048i0q/6CoR3gS2NgLRPCV9qXURfQ/a380ddaba2b6f5d07799b4bd20f80bcb/G1147656393.jpg",
  description:"The Digital Academy is a user-friendly Learning Management System and Student Information System that leverages AI technology to optimize student performance."
  },

  ]

}
