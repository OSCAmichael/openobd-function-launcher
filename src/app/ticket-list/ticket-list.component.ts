import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { TimeagoModule } from 'ngx-timeago';
import { ModalService } from '../modal/modal.service';

@Component({
	selector: 'app-ticket-list',
	standalone: true,
	imports: [CommonModule, TimeagoModule],
	templateUrl: './ticket-list.component.html',
	styleUrl: './ticket-list.component.scss',
})
export class TicketListComponent implements OnInit {
	tickets: Ticket[] = [];
	loading = false;
	// The 'live' property is used by the timeago pipe in the template to auto-update.
	live = true;

	constructor(
		private httpClient: HttpClient,
		@Inject(ModalService) private modalService: ModalService,
	) {}

	ngOnInit(): void {
		this.loading = true;
		this.httpClient.get<Ticket[]>('http://localhost:3000/api/tickets').subscribe((data) => {
			this.tickets = data;
			this.loading = false;
		});
		setInterval(() => {
			this.httpClient.get<Ticket[]>('http://localhost:3000/api/tickets').subscribe((data) => {
				this.tickets = data;
			});
		}, 15_000);
	}

	requestStart(ticketNumber: number) {
		console.log(`Requesting start for ticket ${ticketNumber}`);
		this.modalService.open({
			type: 'info',
			title: 'Connection Requested',
			message: `Starting an OpenOBD connection on ticket ${ticketNumber}...`,
			closable: false,
		});
		this.httpClient.post(`http://localhost:3000/api/start`, { ticketNumber }).subscribe(
			(data) => {
				this.modalService.open({
					type: 'success',
					title: 'Connection Requested',
					message: `Successfully requested a connection for ticket ${ticketNumber}.`,
				});
			},
			(error) => {
				this.modalService.open({
					type: 'error',
					title: 'Connection Failed',
					message: `Failed to connect to ticket ${ticketNumber}: ${error.error.message}`,
				});
			},
		);
	}

	createdAt(created_at: string) {
		return new Date(created_at);
	}
}
