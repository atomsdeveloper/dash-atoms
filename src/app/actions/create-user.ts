"use server";

import { db } from "../../lib/prisma";
import bcrypt from "bcryptjs";
import crypto from "crypto";

interface CreateUserProps {
  email: string;
  password: string;
}

export const createUser = async (input: CreateUserProps) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: input.email,
      },
    });

    // Criar senha criptografada para o usuário.
    let hashedPassword = null;

    if (!user) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(input.password, salt);
    }

    // Criar o usuário se ele não existir.
    if (!user) {
      const newUser = await db.user.create({
        data: {
          email: input.email,
          password: hashedPassword,
          role: "ROU",
          image: "",
          sessions: {},
          VerificationToken: {},
          rous: {},
        },
      });
      console.log("novo usuário criado:", newUser);

      // Criar token de verificação usado para ativação da conta.
      const verificationToken = await db.verificationToken.create({
        data: {
          identifier: input.email,
          token: crypto.randomBytes(32).toString("hex"),
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24), // Token dura 24 horas
          userId: newUser.id,
        },
      });
      console.log("Verificação de Token criada:", verificationToken);

      // Criar uma sessão para o usuário.
      const sessionToken = crypto.randomBytes(32).toString("hex");

      const session = await db.session.create({
        data: {
          sessionToken,
          userId: newUser.id,
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7), // Sessão dura 7 dias
        },
      });
      console.log("Sessão criada:", session);

      return { newUser, session, verificationToken };
    }
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    throw error;
  }
};
