import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  // const session = await auth();
  // if (!session) {
  //   return <p>Acesso negado. Faça login primeiro.</p>;
  // }
  // return <h1>Bem-vindo, {session.user?.name}!</h1>;

  return <h1>Home Page Login</h1>;
}
