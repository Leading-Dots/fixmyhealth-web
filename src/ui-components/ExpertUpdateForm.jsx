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
import { getExpert } from "../graphql/queries";
import { updateExpert } from "../graphql/mutations";
const client = generateClient();
export default function ExpertUpdateForm(props) {
  const {
    id: idProp,
    expert: expertModelProp,
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
    mobile: "",
    education: "",
    introduction: "",
    profilePictureUrl: "",
    experience: "",
    averageRating: "",
    totalReviews: "",
    profileStatus: "",
    Specialization: "",
    ConsultationFee: "",
    LanguageSpoken: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [mobile, setMobile] = React.useState(initialValues.mobile);
  const [education, setEducation] = React.useState(initialValues.education);
  const [introduction, setIntroduction] = React.useState(
    initialValues.introduction
  );
  const [profilePictureUrl, setProfilePictureUrl] = React.useState(
    initialValues.profilePictureUrl
  );
  const [experience, setExperience] = React.useState(initialValues.experience);
  const [averageRating, setAverageRating] = React.useState(
    initialValues.averageRating
  );
  const [totalReviews, setTotalReviews] = React.useState(
    initialValues.totalReviews
  );
  const [profileStatus, setProfileStatus] = React.useState(
    initialValues.profileStatus
  );
  const [Specialization, setSpecialization] = React.useState(
    initialValues.Specialization
  );
  const [ConsultationFee, setConsultationFee] = React.useState(
    initialValues.ConsultationFee
  );
  const [LanguageSpoken, setLanguageSpoken] = React.useState(
    initialValues.LanguageSpoken
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = expertRecord
      ? { ...initialValues, ...expertRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setEmail(cleanValues.email);
    setMobile(cleanValues.mobile);
    setEducation(cleanValues.education);
    setIntroduction(cleanValues.introduction);
    setProfilePictureUrl(cleanValues.profilePictureUrl);
    setExperience(cleanValues.experience);
    setAverageRating(cleanValues.averageRating);
    setTotalReviews(cleanValues.totalReviews);
    setProfileStatus(cleanValues.profileStatus);
    setSpecialization(cleanValues.Specialization);
    setConsultationFee(cleanValues.ConsultationFee);
    setLanguageSpoken(cleanValues.LanguageSpoken);
    setErrors({});
  };
  const [expertRecord, setExpertRecord] = React.useState(expertModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getExpert.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getExpert
        : expertModelProp;
      setExpertRecord(record);
    };
    queryData();
  }, [idProp, expertModelProp]);
  React.useEffect(resetStateValues, [expertRecord]);
  const validations = {
    firstName: [],
    lastName: [],
    email: [{ type: "Required" }, { type: "Email" }],
    mobile: [],
    education: [],
    introduction: [],
    profilePictureUrl: [],
    experience: [],
    averageRating: [],
    totalReviews: [],
    profileStatus: [],
    Specialization: [],
    ConsultationFee: [],
    LanguageSpoken: [],
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
          firstName: firstName ?? null,
          lastName: lastName ?? null,
          email,
          mobile: mobile ?? null,
          education: education ?? null,
          introduction: introduction ?? null,
          profilePictureUrl: profilePictureUrl ?? null,
          experience: experience ?? null,
          averageRating: averageRating ?? null,
          totalReviews: totalReviews ?? null,
          profileStatus: profileStatus ?? null,
          Specialization: Specialization ?? null,
          ConsultationFee: ConsultationFee ?? null,
          LanguageSpoken: LanguageSpoken ?? null,
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
            query: updateExpert.replaceAll("__typename", ""),
            variables: {
              input: {
                id: expertRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ExpertUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              lastName,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
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
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName: value,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
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
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email: value,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
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
              mobile: value,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
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
        label="Education"
        isRequired={false}
        isReadOnly={false}
        value={education}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education: value,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
            };
            const result = onChange(modelFields);
            value = result?.education ?? value;
          }
          if (errors.education?.hasError) {
            runValidationTasks("education", value);
          }
          setEducation(value);
        }}
        onBlur={() => runValidationTasks("education", education)}
        errorMessage={errors.education?.errorMessage}
        hasError={errors.education?.hasError}
        {...getOverrideProps(overrides, "education")}
      ></TextField>
      <TextField
        label="Introduction"
        isRequired={false}
        isReadOnly={false}
        value={introduction}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education,
              introduction: value,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
            };
            const result = onChange(modelFields);
            value = result?.introduction ?? value;
          }
          if (errors.introduction?.hasError) {
            runValidationTasks("introduction", value);
          }
          setIntroduction(value);
        }}
        onBlur={() => runValidationTasks("introduction", introduction)}
        errorMessage={errors.introduction?.errorMessage}
        hasError={errors.introduction?.hasError}
        {...getOverrideProps(overrides, "introduction")}
      ></TextField>
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
              mobile,
              education,
              introduction,
              profilePictureUrl: value,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
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
      <TextField
        label="Experience"
        isRequired={false}
        isReadOnly={false}
        value={experience}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience: value,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
            };
            const result = onChange(modelFields);
            value = result?.experience ?? value;
          }
          if (errors.experience?.hasError) {
            runValidationTasks("experience", value);
          }
          setExperience(value);
        }}
        onBlur={() => runValidationTasks("experience", experience)}
        errorMessage={errors.experience?.errorMessage}
        hasError={errors.experience?.hasError}
        {...getOverrideProps(overrides, "experience")}
      ></TextField>
      <TextField
        label="Average rating"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={averageRating}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating: value,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
            };
            const result = onChange(modelFields);
            value = result?.averageRating ?? value;
          }
          if (errors.averageRating?.hasError) {
            runValidationTasks("averageRating", value);
          }
          setAverageRating(value);
        }}
        onBlur={() => runValidationTasks("averageRating", averageRating)}
        errorMessage={errors.averageRating?.errorMessage}
        hasError={errors.averageRating?.hasError}
        {...getOverrideProps(overrides, "averageRating")}
      ></TextField>
      <TextField
        label="Total reviews"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={totalReviews}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews: value,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
            };
            const result = onChange(modelFields);
            value = result?.totalReviews ?? value;
          }
          if (errors.totalReviews?.hasError) {
            runValidationTasks("totalReviews", value);
          }
          setTotalReviews(value);
        }}
        onBlur={() => runValidationTasks("totalReviews", totalReviews)}
        errorMessage={errors.totalReviews?.errorMessage}
        hasError={errors.totalReviews?.hasError}
        {...getOverrideProps(overrides, "totalReviews")}
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
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus: value,
              Specialization,
              ConsultationFee,
              LanguageSpoken,
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
      <SelectField
        label="Specialization"
        placeholder="Please select an option"
        isDisabled={false}
        value={Specialization}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization: value,
              ConsultationFee,
              LanguageSpoken,
            };
            const result = onChange(modelFields);
            value = result?.Specialization ?? value;
          }
          if (errors.Specialization?.hasError) {
            runValidationTasks("Specialization", value);
          }
          setSpecialization(value);
        }}
        onBlur={() => runValidationTasks("Specialization", Specialization)}
        errorMessage={errors.Specialization?.errorMessage}
        hasError={errors.Specialization?.hasError}
        {...getOverrideProps(overrides, "Specialization")}
      >
        <option
          children="Cardiologist"
          value="CARDIOLOGIST"
          {...getOverrideProps(overrides, "Specializationoption0")}
        ></option>
        <option
          children="Pediatrician"
          value="PEDIATRICIAN"
          {...getOverrideProps(overrides, "Specializationoption1")}
        ></option>
        <option
          children="Gynecologist"
          value="GYNECOLOGIST"
          {...getOverrideProps(overrides, "Specializationoption2")}
        ></option>
        <option
          children="Orthopedic"
          value="ORTHOPEDIC"
          {...getOverrideProps(overrides, "Specializationoption3")}
        ></option>
        <option
          children="Dermatologist"
          value="DERMATOLOGIST"
          {...getOverrideProps(overrides, "Specializationoption4")}
        ></option>
        <option
          children="Neurologist"
          value="NEUROLOGIST"
          {...getOverrideProps(overrides, "Specializationoption5")}
        ></option>
        <option
          children="General physician"
          value="GENERAL_PHYSICIAN"
          {...getOverrideProps(overrides, "Specializationoption6")}
        ></option>
        <option
          children="Ent specialist"
          value="ENT_SPECIALIST"
          {...getOverrideProps(overrides, "Specializationoption7")}
        ></option>
        <option
          children="Psychiatrist"
          value="PSYCHIATRIST"
          {...getOverrideProps(overrides, "Specializationoption8")}
        ></option>
        <option
          children="Diabetologist"
          value="DIABETOLOGIST"
          {...getOverrideProps(overrides, "Specializationoption9")}
        ></option>
        <option
          children="Dietician"
          value="DIETICIAN"
          {...getOverrideProps(overrides, "Specializationoption10")}
        ></option>
      </SelectField>
      <TextField
        label="Consultation fee"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={ConsultationFee}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee: value,
              LanguageSpoken,
            };
            const result = onChange(modelFields);
            value = result?.ConsultationFee ?? value;
          }
          if (errors.ConsultationFee?.hasError) {
            runValidationTasks("ConsultationFee", value);
          }
          setConsultationFee(value);
        }}
        onBlur={() => runValidationTasks("ConsultationFee", ConsultationFee)}
        errorMessage={errors.ConsultationFee?.errorMessage}
        hasError={errors.ConsultationFee?.hasError}
        {...getOverrideProps(overrides, "ConsultationFee")}
      ></TextField>
      <TextField
        label="Language spoken"
        isRequired={false}
        isReadOnly={false}
        value={LanguageSpoken}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              lastName,
              email,
              mobile,
              education,
              introduction,
              profilePictureUrl,
              experience,
              averageRating,
              totalReviews,
              profileStatus,
              Specialization,
              ConsultationFee,
              LanguageSpoken: value,
            };
            const result = onChange(modelFields);
            value = result?.LanguageSpoken ?? value;
          }
          if (errors.LanguageSpoken?.hasError) {
            runValidationTasks("LanguageSpoken", value);
          }
          setLanguageSpoken(value);
        }}
        onBlur={() => runValidationTasks("LanguageSpoken", LanguageSpoken)}
        errorMessage={errors.LanguageSpoken?.errorMessage}
        hasError={errors.LanguageSpoken?.hasError}
        {...getOverrideProps(overrides, "LanguageSpoken")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || expertModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || expertModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
