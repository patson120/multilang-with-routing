import LocalSwitcher from "@/components/LocalSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index")
  return (
    <main>
      <div className="w-22"> <LocalSwitcher /> </div>
      <p>{t('hello')}</p>
    </main>
  );
}
