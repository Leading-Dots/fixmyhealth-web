/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Expert } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ExpertUpdateFormInputValues = {
    firstName?: string;
    lastName?: string;
    email?: string;
    mobile?: string;
    education?: string;
    introduction?: string;
    profilePictureUrl?: string;
    experience?: string;
    averageRating?: number;
    totalReviews?: number;
    profileStatus?: string;
    Specialization?: string;
    ConsultationFee?: number;
    LanguageSpoken?: string;
    clinicLocation?: string;
};
export declare type ExpertUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    mobile?: ValidationFunction<string>;
    education?: ValidationFunction<string>;
    introduction?: ValidationFunction<string>;
    profilePictureUrl?: ValidationFunction<string>;
    experience?: ValidationFunction<string>;
    averageRating?: ValidationFunction<number>;
    totalReviews?: ValidationFunction<number>;
    profileStatus?: ValidationFunction<string>;
    Specialization?: ValidationFunction<string>;
    ConsultationFee?: ValidationFunction<number>;
    LanguageSpoken?: ValidationFunction<string>;
    clinicLocation?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExpertUpdateFormOverridesProps = {
    ExpertUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    mobile?: PrimitiveOverrideProps<TextFieldProps>;
    education?: PrimitiveOverrideProps<TextFieldProps>;
    introduction?: PrimitiveOverrideProps<TextFieldProps>;
    profilePictureUrl?: PrimitiveOverrideProps<TextFieldProps>;
    experience?: PrimitiveOverrideProps<TextFieldProps>;
    averageRating?: PrimitiveOverrideProps<TextFieldProps>;
    totalReviews?: PrimitiveOverrideProps<TextFieldProps>;
    profileStatus?: PrimitiveOverrideProps<SelectFieldProps>;
    Specialization?: PrimitiveOverrideProps<SelectFieldProps>;
    ConsultationFee?: PrimitiveOverrideProps<TextFieldProps>;
    LanguageSpoken?: PrimitiveOverrideProps<TextFieldProps>;
    clinicLocation?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ExpertUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExpertUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    expert?: Expert;
    onSubmit?: (fields: ExpertUpdateFormInputValues) => ExpertUpdateFormInputValues;
    onSuccess?: (fields: ExpertUpdateFormInputValues) => void;
    onError?: (fields: ExpertUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExpertUpdateFormInputValues) => ExpertUpdateFormInputValues;
    onValidate?: ExpertUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExpertUpdateForm(props: ExpertUpdateFormProps): React.ReactElement;
