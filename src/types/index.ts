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