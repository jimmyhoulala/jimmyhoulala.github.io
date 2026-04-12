import { useTranslation } from "react-i18next";
import { HiOutlineMail, HiOutlineDownload } from "react-icons/hi";
import { FaInstagram, FaGithub, FaLinkedinIn, FaWeixin } from "react-icons/fa";

const socialLinks = [
  { icon: FaGithub, url: "https://github.com/jimmyhoulala", label: "GitHub" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/jimmy-hou-625658303", label: "LinkedIn" },
  { icon: FaInstagram, url: "https://www.instagram.com/jimmyhoulala", label: "Instagram" },
  { icon: FaWeixin, url: "/uploads/wechat.jpg", label: "WeChat" },
];

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="bio" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] min-h-[calc(100dvh-5.5rem)]">
        {/* Left — photo with dark background */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-gray-900">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: "url(/uploads/endless-constellation.svg)",
              backgroundSize: "800px",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="relative flex items-center justify-center h-full px-6 py-12 lg:px-10 lg:py-16">
            <div className="w-full max-w-[90%] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <img
                src="/uploads/avatar.jpeg"
                alt="Jimmy Hou"
                className="w-full h-auto block object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right — text content on white */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-14 xl:px-20 py-12 lg:py-16">
          {/* Subtitle line */}
          <p className="uppercase tracking-[0.2em] text-[11px] text-[#5BC0DE] font-semibold mb-5 leading-relaxed">
            {(t("interests.items", { returnObjects: true }) as string[]).join(" \u25CB ")}
          </p>

          {/* Name */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] font-normal text-gray-800 leading-tight mb-6 tracking-tight">
            {t("hero.name")}
          </h1>

          {/* Role & org */}
          <p className="text-[15px] text-gray-700 font-medium mb-0.5">{t("hero.role")}</p>
          <p className="text-sm text-gray-400 mb-7">{t("hero.org")}</p>

          {/* Bio */}
          <p className="text-[14.5px] leading-[1.75] text-gray-600 mb-7">
            {t("hero.about")}
          </p>

          {/* Social row */}
          <div className="flex items-center gap-2.5 mb-7 flex-wrap">
            <a
              href={`mailto:${t("hero.email")}`}
              className="p-2 rounded-full text-gray-400 hover:text-[#5BC0DE] hover:bg-sky-50 transition-colors"
              aria-label="Email"
            >
              <HiOutlineMail className="w-[18px] h-[18px]" />
            </a>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:text-[#5BC0DE] hover:bg-sky-50 transition-colors"
                aria-label={s.label}
              >
                <s.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>

          {/* Download CV */}
          <div>
            <a
              href={t("hero.cvUrl")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#5BC0DE] text-[#5BC0DE] hover:bg-[#5BC0DE] hover:text-white rounded-md text-sm font-medium transition-colors"
            >
              <HiOutlineDownload className="w-4 h-4" />
              {t("hero.downloadCV")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
