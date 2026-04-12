import { useTranslation } from "react-i18next";
import { HiOutlineBriefcase, HiOutlineExternalLink } from "react-icons/hi";

interface WorkEntry {
  position: string;
  company: string;
  companyUrl: string;
  logo: string;
  dateStart: string;
  dateEnd: string;
  summary: string[];
  button?: { text: string; url: string };
}

export default function WorkExperience() {
  const { t } = useTranslation();
  const work = t("experience.work", { returnObjects: true }) as WorkEntry[];

  return (
    <section id="work-experience" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-10 text-center flex items-center justify-center gap-3">
          <HiOutlineBriefcase className="w-8 h-8 text-emerald-600" />
          {t("experience.workTitle")}
        </h2>

        <div className="relative border-l-2 border-emerald-200 ml-3">
          {work.map((entry, i) => (
            <div key={i} className="relative pl-8 pb-10 last:pb-0">
              <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow" />
              <div className="text-xs text-gray-500 font-medium mb-1">
                {entry.dateStart} — {entry.dateEnd}
              </div>
              <div className="flex items-center gap-2 mb-1">
                {entry.logo && (
                  <img
                    src={entry.logo}
                    alt={entry.company}
                    className="h-5 w-5 object-contain rounded"
                  />
                )}
                <h4 className="text-base font-semibold text-gray-900">
                  {entry.position}
                </h4>
              </div>
              <a
                href={entry.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-emerald-600 font-medium hover:underline"
              >
                {entry.company}
              </a>
              <ul className="mt-2 space-y-1">
                {entry.summary.map((line, j) => (
                  <li
                    key={j}
                    className="text-sm text-gray-600 leading-relaxed flex items-start gap-2"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
              {entry.button && (
                <a
                  href={entry.button.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
                >
                  <HiOutlineExternalLink className="w-3.5 h-3.5" />
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
