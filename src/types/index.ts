import { FieldErrors } from "react-hook-form";
export type FormInputs = {
    firstname: string;
    lastname: string;
    email: string;
    phone: number;
};

export type CommerceFormInputs = {
    commerceplatform: string;
    url: string;
};

export type ErrorProps = {
    fieldName: string;
    errors: FieldErrors<FormInputs>;
};

export type StepProps = {
    step: number;
    title: string;
    description: string;
};

export type RootState = {
    UserInfoSlice: {
        formData: {
            firstname: string;
            lastname: string;
            email: string;
            phone: number;
            commerceplatform: string;
            url: string;
        }
    };
};