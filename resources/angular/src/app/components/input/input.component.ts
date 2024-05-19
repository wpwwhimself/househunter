import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements ControlValueAccessor {
  @Input() label: string = ""
  @Input() name!: string
  @Input() type: string = "text"

  value: string = ""
  onChange: (val: string) => void = () => {}
  onTouched: () => void = () => {}

  writeValue(obj: string): void {
    this.value = obj
  }
  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {

  }

  handleInputChange(event: Event): void {
    const target = event.target as HTMLInputElement
    this.value = target.value
    this.onChange(this.value)
    this.onTouched()
  }
}
