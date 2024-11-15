"use server";

import { SignupFormSchema } from "@/_lib/dbSchema";

export async function signUp(prevState, formData) {
  const data = {
    name: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const validateData = SignupFormSchema.safeParse(data);

  if (!validateData.success) {
    console.error(validateData.error.flatten().fieldErrors);
    return { error: validateData.error.flatten().fieldErrors };
  }

  const { name, email, password } = validateData.data;

  const hashedPassword = await bcrypt.hash(password);
  console.log(name, email, hashedPassword);

  return { data };
}
