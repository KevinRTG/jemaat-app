import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import FormSetting from "./FormSetting";

export default async function SettingPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <p className="text-center mt-10">Silakan login terlebih dahulu.</p>;

  return <FormSetting userId={session.user.id} />;
}
