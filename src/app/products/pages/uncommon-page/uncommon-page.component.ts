import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: false,
  templateUrl: './uncommon-page.component.html',
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' | 'no existe' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
    'no existe': 'invitarl@',
  };

  public changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'no existe';
  }

  //i18nPrural

  public clients: string[] = [
    'Maria',
    'Pedro',
    'Fernando',
    'Hernando',
    'Eduardo',
    'Melissa',
    'Natalia',
  ];

  public clientsMap = {
    '=0': 'no hay clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 esperando.',
    other: 'tenemos # clientes esperando.',
  };

  public deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Brandon',
    age: 28,
    address: 'Madrid, España',
  };

  //Async Pipe

  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve('Tenemos data en la promesa.');
      console.log('Tenemos data en la promesa');
    }, 3500)
  );
}
