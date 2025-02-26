"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useContext, useTransition } from "react";
import { signIn } from "next-auth/react";
import { isValidEmail } from "@/helpers/email";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LoadingContext } from "@/context/loading";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { Chrome } from "lucide-react";
import SeparatorComponent from "./separator";
import { createUser } from "../actions/create-user";
import { useRouter } from "next/navigation";
import Loading from "./loading";

export const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(3, {
      message: "O E-mail é obigatório.",
    })
    .email("Este não é um email válido")
    .refine(async (e) => {
      return await isValidEmail(e);
    }, "Este E-mail está incorreto."),
  password: z.string().trim().min(3, {
    message: "A senha é obrigatória.",
  }),
});

type TypeFormSchema = z.infer<typeof formSchema>;

const Login = () => {
  const { handleSetLoading } = useContext(LoadingContext);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TypeFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    shouldUnregister: true,
  });

  const onSubmit = async (data: TypeFormSchema) => {
    console.log("onSumit");

    startTransition(async () => {
      try {
        const user = await createUser({
          email: data.email,
          password: data.password,
        });
        sessionStorage.setItem("user", JSON.stringify(user?.newUser));

        toast.success(`Login realizado com sucesso.`);
        router.push(`/dashboard`);
      } catch (error) {
        toast.error(`Erro ao receber dados na função de onSubimit(). ${error}`);
      }
    });
  };

  return (
    <>
      {isPending ? (
        <Loading />
      ) : (
        <div className="h-[430px] w-[370px]">
          <Card className="flex h-full w-full flex-col items-center">
            <CardHeader className="space-y-4">
              <CardTitle className="text-xl">Faça Login</CardTitle>
              <CardDescription>
                Insira suas credênciais ou faça login com o google.
              </CardDescription>

              <Button
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              >
                <p className="text-xs">Entrar com o Google</p>
                <Chrome />
              </Button>
            </CardHeader>

            <SeparatorComponent text="ou continue com" />

            <CardContent className="w-full p-3">
              <div>
                <FormProvider {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-4"
                  >
                    {/* NOME */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="space-y-1 px-1">
                          <FormLabel>Seu E-mail</FormLabel>

                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Dígite seu e-mail..."
                              {...field}
                            />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* CPF */}
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => {
                        return (
                          <FormItem className="space-y-1 px-1">
                            <FormLabel>Sua Senha</FormLabel>

                            <FormControl>
                              <Input
                                type="password"
                                placeholder="Dígite sua senha..."
                                {...field}
                              />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        );
                      }}
                    />
                    <div className="mt-3 flex w-full items-center justify-center">
                      <Button className="w-full" type="submit">
                        <p className="text-xs">Entrar </p>
                      </Button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default Login;
