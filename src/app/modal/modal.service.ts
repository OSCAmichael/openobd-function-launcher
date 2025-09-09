import { Injectable, signal } from '@angular/core';

export interface ModalConfig {
	type: 'success' | 'error' | 'info';
	title: string;
	message: string;
	closable?: boolean;
}

@Injectable({
	providedIn: 'root',
})
export class ModalService {
	readonly config = signal<ModalConfig | null>(null);

	open = (config: ModalConfig) => {
		// If a modal is already open, briefly set it to null
		// to force Angular to re-render the component.
		if (this.config() !== null) {
			this.config.set(null);
		}
		setTimeout(() => this.config.set({ ...config }), 0);
	};

	close = () => this.config.set(null);
}
