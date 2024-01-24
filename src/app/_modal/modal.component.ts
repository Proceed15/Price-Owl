import { Component, ViewEncapsulation, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'jw-modal',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.less'],
    encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
    @Input() id!: string;
    private element: HTMLElement;

    constructor(private modalService: ModalService, private el: ElementRef<HTMLElement>) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        if (!this.id) {
            console.error('modal deve ter um id');
            return;
        }

        document.body.appendChild(this.element);

        this.element.addEventListener('click', (event: MouseEvent) => {
            const targetElement = event.target as HTMLElement; // Garantir que o alvo do evento seja um elemento HTML
            if (targetElement && targetElement.className === 'jw-modal') {
                this.close();
            }
        });

        this.modalService.add(this);
    }

    ngOnDestroy(): void {
        this.modalService.remove(this.id);
        this.element.remove();
    }

    open(): void {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }

    close(): void {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
}
