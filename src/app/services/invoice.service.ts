import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  generatePdf(element: HTMLElement) {
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgProps= pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('invoice.pdf');
    });
  }

  //printHtml(element: HTMLElement) {
    //const printContents = element.innerHTML;
    //const originalContents = document.body.innerHTML;
    //document.body.innerHTML = printContents;
    //window.print();
    //document.body.innerHTML = originalContents;
  //}
}
