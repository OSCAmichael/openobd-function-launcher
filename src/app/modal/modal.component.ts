import { CommonModule } from '@angular/common';
import { Component, HostBinding, inject } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
	selector: 'app-modal',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './modal.component.html',
	styleUrl: './modal.component.scss',
})
export class ModalComponent {
	modalService = inject(ModalService);

	@HostBinding('style.display')
	get display() {
		return this.modalService.config() ? 'block' : 'none';
	}

	close = () => this.modalService.close();
}
