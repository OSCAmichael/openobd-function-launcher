import { Component } from '@angular/core';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { ModalComponent } from './modal/modal.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [TicketListComponent, ModalComponent],
})
export class AppComponent {}
