import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [FormComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the form component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.form?.value).toEqual({
      name: '',
      email: '',
      password: ''
    });
  });

  it('should mark the form as invalid if fields are empty', () => {
    expect(component.form?.valid).toBeFalsy();

    const nameInput = component.form?.controls['name'];
    nameInput?.setValue('John Doe');

    expect(component.form?.valid).toBeFalsy();

    const emailInput = component.form?.controls['email'];
    emailInput?.setValue('john@example.com');

    expect(component.form?.valid).toBeFalsy();

    const passwordInput = component.form?.controls['password'];
    passwordInput?.setValue('password');

    expect(component.form?.valid).toBeTruthy();
  });

  // Add more test cases as per your requirements

  it('should call onSubmit method when form is submitted', () => {
    spyOn(component, 'onSubmit');

    const formElement = fixture.nativeElement.querySelector('form');
    formElement.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });
});
