import { Component, ElementRef, ViewChild } from '@angular/core';
import { CustomizerSettingsService } from '../../customizer-settings/customizer-settings.service';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
    selector: 'app-invoice-details',
    templateUrl: './invoice-details.component.html',
    styleUrls: ['./invoice-details.component.scss']
})
export class InvoiceDetailsComponent {

    @ViewChild('invoiceDetails') invoiceDetails!: ElementRef;

    constructor(
        private invoiceService: InvoiceService,
        public themeService: CustomizerSettingsService
    ) {}
    
    toggleTheme() {
        this.themeService.toggleTheme();
    }

    toggleRTLEnabledTheme() {
        this.themeService.toggleRTLEnabledTheme();
    }

    downloadInvoice() {
        this.invoiceService.generatePdf(this.invoiceDetails.nativeElement);
    }
    
    forProduction() {
        this.invoiceService.generatePdf(this.invoiceDetails.nativeElement);
    }

}