import { useTranslation } from "react-i18next";
import { HiOutlineExternalLink } from "react-icons/hi";

interface ProjectItem {
  id: string;
  title: string;
  date: string;
  link: string;
  image?: string;
  tags: string[];
  description: string;
  enOnly?: boolean;
}

function FeaturedCard({ project }: { project: ProjectItem }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <div className="relative overflow-hidden bg-gray-50 border-b border-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug pr-2">
            {project.title}
          </h3>
          <HiOutlineExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 shrink-0 mt-1 transition-colors" />
        </div>
        <p className="text-xs text-gray-400 mb-3">{project.date}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-xs rounded-full bg-emerald-50 text-emerald-700 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

function CompactCard({ project }: { project: ProjectItem }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-5"
    >
      <div className="shrink-0 mt-1 w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
        <span className="text-emerald-600 font-semibold text-sm">
          {project.title.charAt(0)}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug pr-2">
            {project.title}
          </h3>
          <HiOutlineExternalLink className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 shrink-0 mt-0.5 transition-colors" />
        </div>
        <p className="text-xs text-gray-400 mb-2">{project.date}</p>
        <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full bg-gray-50 text-gray-600 font-medium border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Projects() {
  const { t, i18n } = useTranslation();
  const items = t("projects.items", { returnObjects: true }) as ProjectItem[];

  const filtered = items.filter(
    (p) => !(p.enOnly && i18n.language === "zh"),
  );

  const featured = filtered.filter((p) => p.image);
  const compact = filtered.filter((p) => !p.image);

  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-3 text-center">
          {t("projects.title")}
        </h2>
        {t("projects.subtitle") && (
          <p className="text-gray-500 text-center mb-12">
            {t("projects.subtitle")}
          </p>
        )}

        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featured.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {compact.length > 0 && (
          <div className="grid md:grid-cols-2 gap-5">
            {compact.map((project) => (
              <CompactCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
