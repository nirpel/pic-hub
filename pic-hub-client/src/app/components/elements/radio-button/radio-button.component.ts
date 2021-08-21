import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RadioButtonComponent),
    multi: true
  }]
})
export class RadioButtonComponent implements OnInit, ControlValueAccessor {

  @Input() label: string;
  @Input() name: string;
  @Input('value') private _value: any;
  @Input() disabled: boolean = false;
  onChange = (_: any) => { };
  onBlur = (_: any) => { };
  modelValue: any;

  constructor() { }

  get value(): any { 
    return this._value; 
  }

  set value(value: any) {
    if (!value) {
      this._value = value;
      this.onChange(value);
      this.onBlur(value);
    }
  }

  writeValue(obj: any): void {
    this.modelValue = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onBlur = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChanged($event: any) {
    this.onChange(this.modelValue);
  }

  ngOnInit(): void {
  }

}
