import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  surname: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  username: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "La password deve essere di almeno 8 caratteri." }),
});

export const SigninValidation = z.object({
  email: z.string().email({ message: "E-mail non valida" }),
  password: z.string().min(8, { message: "La password deve essere di almeno 8 caratteri." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  surname: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  username: z.string().min(2, { message: "Il nome deve contenere almeno 2 caratteri." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimo 5 caratteri." }).max(2200, { message: "Massimo 200 caratteri" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "Questo campo è obbligatorio" }).max(1000, { message: "Massimo 1000 caratteri" }),
  tags: z.string(),
});