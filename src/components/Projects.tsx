import { useTranslation } from "react-i18next";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectItem {
  id: string;
  title: string;
  date: string;
  link: string;
  tags: string[];
  description: string;
  enOnly?: boolean;
}

export default function Projects() {
  const { t, i18n } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as ProjectItem[];

  const filtered = items.filter(
    (p) => !(p.enOnly && i18n.language === "zh"),
  );

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-3 text-center">
          {t("projects.title")}
        </h2>
        {t("projects.subtitle") && (
          <p className="text-gray-500 text-center mb-10">
            {t("projects.subtitle")}
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug pr-2">
                    {project.title}
                  </h3>
                  <HiOutlineExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 shrink-0 mt-0.5" />
                </div>
                <p className="text-xs text-gray-400 mb-3">{project.date}</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-emerald-50 text-emerald-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
