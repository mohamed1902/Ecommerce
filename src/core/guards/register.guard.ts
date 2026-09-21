import { CanDeactivateFn } from '@angular/router';
import { RegisterComponent } from '../../app/pages/register/register.component';

export const registerGuard: CanDeactivateFn<RegisterComponent> = (component, currentRoute, currentState, nextState) => {
  if(component.registeationForm.valid){
    const alert = window.confirm('your data will be lose');
    return alert;
  }
  return true;
};
