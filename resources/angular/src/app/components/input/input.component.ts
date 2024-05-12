import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() type?: string = "text"
  @Input() name!: string
  @Input() label!: string

  @Output() valueChange = new EventEmitter<string>()

  formControl: FormControl = new FormControl("")

  get value(): string {
    return this.formControl.value
  }
  set value(value: string) {
    this.formControl.setValue(value)
    this.valueChange.emit(value)
  }
}
