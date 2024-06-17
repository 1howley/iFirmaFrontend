import { Component } from "@angular/core";

interface Stone {
    value: string;
    viewValue: string;
}

@Component({
    selector: 'app-create-order',
    templateUrl: './create-order.component.html',
    styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent {

    stones: Stone[] = [
        {value: 'branca-0', viewValue: 'Branca 50x50 Serrada'},
        {value: 'branca-1', viewValue: 'Branca 37x37 Serrada'},
        {value: 'amarela-0', viewValue: 'Amarela 57x57 Serrada'},
    ];

}