import {listExperts, listUsers} from "@/graphql/queries";
import client from "./apiClient";
import {
  createExpert,
  createUser,
} from "@/graphql/mutations";
import { ProfileStatus } from "@/API";
// import { UserRole } from "types";
type ROLE = "patient" | "doctor";

export const createUsers = async (role: ROLE, email: string, userId: string) => {
  if (role === "patient") {
    return await addPatient(email, userId);
  } else {
    return await addExpert(email, userId);
  }
};

export const getUser = async (userId: string, role: ROLE) => {
  if (role === "patient") {
    return await findPatient(userId);
  } else {
    return await findExpert(userId);
  }
};

const addExpert = async (email: string, userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: createExpert,
      variables: {
        input: {
          email: email,
          id: userId,
          profileStatus: ProfileStatus.PENDING,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.createExpert;
  } catch (error) {
    console.error(error);
  }
};

const addPatient = async (email: string, userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: createUser,
      variables: {
        input: {
          id: userId,
          email: email,
          profileStatus: ProfileStatus.PENDING,
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    return data.createUser;
  } catch (error) {
    console.error(error);
  }
};

const findPatient = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listUsers,
      variables: {
        filter: {
          id: {
            eq: userId,
          },
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    console.log(data);
    return data.listUsers.items[0];
  } catch (error) {
    console.error(error);
  }
};

const findExpert = async (userId: string) => {
  try {
    const { data, errors } = await client.graphql({
      query: listExperts,
      variables: {
        filter: {
          id: {
            eq: userId,
          },
        },
      },
    });

    if (errors) {
      console.error(errors);
    }
    console.log(data);
    return data.listExperts.items[0];
  } catch (error) {
    console.error(error);
  }
};


