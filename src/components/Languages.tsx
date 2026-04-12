import { useTranslation } from "react-i18next";

interface LangItem {
  name: string;
  percent: number;
}

export default function Languages() {
  const { t } = useTranslation();
  const items = t("languages.items", { returnObjects: true }) as LangItem[];

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-10 text-center">
          {t("languages.title")}
        </h2>

        <div className="space-y-6">
          {items.map((lang) => (
            <div key={lang.name}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800">{lang.name}</span>
                <span className="text-sm text-gray-500">{lang.percent}%</span>
              </div>
              <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full transition-all duration-700"
                  style={{ width: `${lang.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
