/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUser } from "../graphql/mutations";
const client = generateClient();
export default function UserCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    mobile: "",
    address: "",
    height: "",
    weight: "",
    subscriptionStatus: "",
    profilePictureUrl: "",
    profileStatus: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [dob, setDob] = React.useState(initialValues.dob);
  const [mobile, setMobile] = React.useState(initialValues.mobile);
  const [address, setAddress] = React.useState(initialValues.address);
  const [height, setHeight] = React.useState(initialValues.height);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [subscriptionStatus, setSubscriptionStatus] = React.useState(
    initialValues.subscriptionStatus
  );
  const [profilePictureUrl, setProfilePictureUrl] = React.useState(
    initialValues.profilePictureUrl
  );
  const [profileStatus, setProfileStatus] = React.useState(
    initialValues.profileStatus
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setEmail(initialValues.email);
    setDob(initialValues.dob);
    setMobile(initialValues.mobile);
    setAddress(initialValues.address);
    setHeight(initialValues.height);
    setWeight(initialValues.weight);
    setSubscriptionStatus(initialValues.subscriptionStatus);
    setProfilePictureUrl(initialValues.profilePictureUrl);
    setProfileStatus(initialValues.profileStatus);
    setErrors({});
  };
  const validations = {
    firstName: [{ type: "Required" }],
    lastName: [{ type: "Required" }],
    email: [{ type: "Email" }],
    dob: [],
    mobile: [],
    address: [],
    height: [],
    weight: [],
    subscriptionStatus: [],
    profilePictureUrl: [],
    profileStatus: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstName,
          lastName,
          email,
          dob,
          mobile,
          address,
          height,
          weight,
          subscriptionStatus,
          profilePictureUrl,
          profileStatus,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createUser.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              email,
              dob,
              mobile,
              address,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              email,
              dob,
              mobile,
              address,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email: value,
              dob,
              mobile,
              address,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Dob"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dob}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob: value,
              mobile,
              address,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.dob ?? value;
          }
          if (errors.dob?.hasError) {
            runValidationTasks("dob", value);
          }
          setDob(value);
        }}
        onBlur={() => runValidationTasks("dob", dob)}
        errorMessage={errors.dob?.errorMessage}
        hasError={errors.dob?.hasError}
        {...getOverrideProps(overrides, "dob")}
      ></TextField>
      <TextField
        label="Mobile"
        isRequired={false}
        isReadOnly={false}
        value={mobile}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob,
              mobile: value,
              address,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.mobile ?? value;
          }
          if (errors.mobile?.hasError) {
            runValidationTasks("mobile", value);
          }
          setMobile(value);
        }}
        onBlur={() => runValidationTasks("mobile", mobile)}
        errorMessage={errors.mobile?.errorMessage}
        hasError={errors.mobile?.hasError}
        {...getOverrideProps(overrides, "mobile")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob,
              mobile,
              address: value,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Height"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={height}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob,
              mobile,
              address,
              height: value,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.height ?? value;
          }
          if (errors.height?.hasError) {
            runValidationTasks("height", value);
          }
          setHeight(value);
        }}
        onBlur={() => runValidationTasks("height", height)}
        errorMessage={errors.height?.errorMessage}
        hasError={errors.height?.hasError}
        {...getOverrideProps(overrides, "height")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob,
              mobile,
              address,
              height,
              weight: value,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <SelectField
        label="Subscription status"
        placeholder="Please select an option"
        isDisabled={false}
        value={subscriptionStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob,
              mobile,
              address,
              height,
              weight,
              subscriptionStatus: value,
              profilePictureUrl,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.subscriptionStatus ?? value;
          }
          if (errors.subscriptionStatus?.hasError) {
            runValidationTasks("subscriptionStatus", value);
          }
          setSubscriptionStatus(value);
        }}
        onBlur={() =>
          runValidationTasks("subscriptionStatus", subscriptionStatus)
        }
        errorMessage={errors.subscriptionStatus?.errorMessage}
        hasError={errors.subscriptionStatus?.hasError}
        {...getOverrideProps(overrides, "subscriptionStatus")}
      >
        <option
          children="Active"
          value="ACTIVE"
          {...getOverrideProps(overrides, "subscriptionStatusoption0")}
        ></option>
        <option
          children="Inactive"
          value="INACTIVE"
          {...getOverrideProps(overrides, "subscriptionStatusoption1")}
        ></option>
        <option
          children="Expired"
          value="EXPIRED"
          {...getOverrideProps(overrides, "subscriptionStatusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Profile picture url"
        isRequired={false}
        isReadOnly={false}
        value={profilePictureUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob,
              mobile,
              address,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl: value,
              profileStatus,
            };
            const result = onChange(modelFields);
            value = result?.profilePictureUrl ?? value;
          }
          if (errors.profilePictureUrl?.hasError) {
            runValidationTasks("profilePictureUrl", value);
          }
          setProfilePictureUrl(value);
        }}
        onBlur={() =>
          runValidationTasks("profilePictureUrl", profilePictureUrl)
        }
        errorMessage={errors.profilePictureUrl?.errorMessage}
        hasError={errors.profilePictureUrl?.hasError}
        {...getOverrideProps(overrides, "profilePictureUrl")}
      ></TextField>
      <SelectField
        label="Profile status"
        placeholder="Please select an option"
        isDisabled={false}
        value={profileStatus}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              dob,
              mobile,
              address,
              height,
              weight,
              subscriptionStatus,
              profilePictureUrl,
              profileStatus: value,
            };
            const result = onChange(modelFields);
            value = result?.profileStatus ?? value;
          }
          if (errors.profileStatus?.hasError) {
            runValidationTasks("profileStatus", value);
          }
          setProfileStatus(value);
        }}
        onBlur={() => runValidationTasks("profileStatus", profileStatus)}
        errorMessage={errors.profileStatus?.errorMessage}
        hasError={errors.profileStatus?.hasError}
        {...getOverrideProps(overrides, "profileStatus")}
      >
        <option
          children="Pending"
          value="PENDING"
          {...getOverrideProps(overrides, "profileStatusoption0")}
        ></option>
        <option
          children="Published"
          value="PUBLISHED"
          {...getOverrideProps(overrides, "profileStatusoption1")}
        ></option>
        <option
          children="Rejected"
          value="REJECTED"
          {...getOverrideProps(overrides, "profileStatusoption2")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
