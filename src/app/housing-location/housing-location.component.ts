import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city}}, {{housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}

/*
Here's what I think is happening...

- The `HomeComponent` has an instance property called `housingLocation` with the data
- That property is bound to the `housingLocation` attribute on the `app-housing-location` tag, passing it to the resulting child component
- The `@Input()` decorator is used to receive the property from the parent component and assign it to the `housingLocation` instance property on the child component
- The `housingLocation` property is now in scope to be referanced in the child component's template, either via interpolation, or property binding.

*/