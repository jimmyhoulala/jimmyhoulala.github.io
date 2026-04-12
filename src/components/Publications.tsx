import { useTranslation } from "react-i18next";
import { HiOutlineBookOpen, HiOutlineExternalLink } from "react-icons/hi";

interface PublicationEntry {
  title: string;
  authors: string;
  venue: string;
  date: string;
  url?: string;
  tags: string[];
}

interface BlogEntry {
  title: string;
  date: string;
  url: string;
  summary: string;
}

export default function Publications() {
  const { t } = useTranslation();
  const publications = t("publications.items", { returnObjects: true }) as PublicationEntry[];
  const blogs = t("publications.blogs", { returnObjects: true }) as BlogEntry[];
  const hasContent = publications.length > 0 || blogs.length > 0;

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-10 text-center flex items-center justify-center gap-3">
          <HiOutlineBookOpen className="w-8 h-8 text-emerald-600" />
          {t("publications.title")}
        </h2>

        {!hasContent && (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100 shadow-sm">
            <HiOutlineBookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-400 text-sm">{t("publications.emptyMessage")}</p>
          </div>
        )}

        {publications.length > 0 && (
          <div className="space-y-4 mb-10">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {t("publications.publicationsTitle")}
            </h3>
            {publications.map((pub, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h4 className="text-base font-semibold text-gray-900 leading-snug">
                    {pub.title}
                  </h4>
                  <span className="text-xs text-gray-500 font-medium whitespace-nowrap shrink-0">
                    {pub.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                <p className="text-sm text-emerald-600 font-medium mb-2">{pub.venue}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs rounded-full bg-emerald-50 text-emerald-700 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:text-emerald-900 transition-colors"
                  >
                    <HiOutlineExternalLink className="w-3.5 h-3.5" />
                    View Paper
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {blogs.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {t("publications.blogsTitle")}
            </h3>
            {blogs.map((blog, i) => (
              <a
                key={i}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <h4 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors leading-snug">
                    {blog.title}
                  </h4>
                  <span className="text-xs text-gray-500 font-medium whitespace-nowrap shrink-0">
                    {blog.date}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{blog.summary}</p>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
