import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaWeixin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  { icon: HiOutlineMail, url: "mailto:hqsh200459@gmail.com", label: "Email" },
  { icon: FaGithub, url: "https://github.com/jimmyhoulala", label: "GitHub" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/in/jimmy-hou-625658303", label: "LinkedIn" },
  { icon: FaInstagram, url: "https://www.instagram.com/jimmyhoulala", label: "Instagram" },
  { icon: FaWeixin, url: "/uploads/wechat.jpg", label: "WeChat" },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target={l.url.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors"
              aria-label={l.label}
            >
              <l.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {year} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}
