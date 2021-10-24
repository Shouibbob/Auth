import { FormGroup } from "@angular/forms";

//check that two fields match
export function MustMatch(controlName:string,matchingControlName: string){
    return (formGroup:FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if(matchingControl.errors && !matchingControl.errors.mustMatch){
            return;
        }

        if (control.value !== matchingControl.value){
            matchingControl.setErrors({mustMatch:true});
        }else{
            matchingControl.setErrors(null);
        }
    }
}