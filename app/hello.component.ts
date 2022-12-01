import { Component, Input } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AgmMarkerCluster } from './marker-cluster.component';
@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent {
  @Input() name: string;
}
