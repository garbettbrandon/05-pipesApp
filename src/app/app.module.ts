import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { SharedModule } from './shared/shared.module';

//Configuración del locale de la app
import localEsHN from '@angular/common/locales/es-HN';
import localFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEsHN);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SharedModule,
  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: { preset: Aura, options: { darkModeSelector: '.my-app-dark' } },
      ripple: true,
    }),
    {
      provide: LOCALE_ID,
      useValue: 'es-HN',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
