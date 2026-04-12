import { useTranslation } from "react-i18next";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ResearchEntry {
  title: string;
  institution: string;
  dateStart: string;
  dateEnd: string;
  bullets: string[];
  button?: { text: string; url: string };
}

export default function Research() {
  const { t } = useTranslation();
  const items = t("research.items", { returnObjects: true }) as ResearchEntry[];

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-10 text-center">
          {t("research.title")}
        </h2>

        <div className="space-y-6">
          {items.map((entry, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-emerald-600 font-medium">
                    {entry.institution}
                  </p>
                </div>
                <span className="text-xs text-gray-500 font-medium whitespace-nowrap shrink-0">
                  {entry.dateStart} — {entry.dateEnd}
                </span>
              </div>

              <ul className="space-y-2">
                {entry.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray-600 leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {entry.button && (
                <a
                  href={entry.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  <HiOutlineExternalLink className="w-4 h-4" />
                  {entry.button.text}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
