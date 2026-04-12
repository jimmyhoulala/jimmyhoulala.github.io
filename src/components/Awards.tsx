import { useTranslation } from "react-i18next";
import { HiOutlineTrophy } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";

interface AwardEntry {
  title: string;
  date: string;
  awarder: string;
  url?: string;
  certificateUrl?: string;
  summary: string[];
}

export default function Awards() {
  const { t } = useTranslation();
  const items = t("awards.items", { returnObjects: true }) as AwardEntry[];

  return (
    <section id="awards" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-10 text-center">
          {t("awards.title")}
        </h2>

        <div className="space-y-4">
          {items.map((award, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-600 shrink-0 mt-0.5">
                  <HiOutlineTrophy className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <h3 className="text-base font-semibold text-gray-900 leading-snug">
                      {award.title}
                    </h3>
                    <span className="text-xs text-gray-500 font-medium whitespace-nowrap shrink-0">
                      {award.date}
                    </span>
                  </div>
                  <p className="text-sm text-emerald-600 font-medium mt-0.5">
                    {award.awarder}
                  </p>
                  {award.summary.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {award.summary.map((line, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-600 flex items-start gap-2"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                  {award.certificateUrl && (
                    <a
                      href={award.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
                    >
                      <HiOutlineExternalLink className="w-3.5 h-3.5" />
                      {t("viewCertificate")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
