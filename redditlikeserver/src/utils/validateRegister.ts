import { UsernamePasswordInput } from "src/utils/UsernamePasswordInput";

export const validateRegister = (input: UsernamePasswordInput) => {
  if (!input.email.includes("@")) {
    return [{ field: "email", message: "invalid email" }];
  }
  if (input.username.length <= 2) {
    return [{ field: "username", message: "length must be greater than two" }];
  }

  if (input.username.includes("@")) {
    return [{ field: "username", message: "cannot include @" }];
  }

  if (input.password.length < 3) {
    return [
      { field: "password", message: "length must be greater than three" },
    ];
  }
  return null;
};
