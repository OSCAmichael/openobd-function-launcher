import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';

bootstrapApplication(AppComponent, {
	providers: [provideHttpClient(), importProvidersFrom(TimeagoModule.forRoot())],
}).catch((err) => console.error(err));
