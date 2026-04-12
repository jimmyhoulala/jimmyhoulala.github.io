import { useTranslation } from "react-i18next";
import {
  HiOutlineCode,
  HiOutlineChartBar,
  HiOutlineDatabase,
} from "react-icons/hi";

interface SkillItem {
  name: string;
  icon: string;
  description?: string;
}

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  code: HiOutlineCode,
  chart: HiOutlineChartBar,
  database: HiOutlineDatabase,
};

function HobbyIcon({ icon }: { icon: string }) {
  const svgMap: Record<string, string> = {
    basketball: "/uploads/basketball-solid.svg",
    guitar: "/uploads/guitar-solid.svg",
    music: "/uploads/music-solid.svg",
  };
  const src = svgMap[icon];
  if (!src) return null;
  return <img src={src} alt={icon} className="w-8 h-8 opacity-80" />;
}

export default function Skills() {
  const { t } = useTranslation();
  const technical = t("skills.technical", { returnObjects: true }) as SkillItem[];
  const hobbies = t("skills.hobbies", { returnObjects: true }) as SkillItem[];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="font-serif text-3xl font-normal text-gray-900 mb-10 text-center">
          {t("skills.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Technical */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {t("skills.technicalTitle")}
            </h3>
            <div className="space-y-4">
              {technical.map((skill) => {
                const Icon = techIcons[skill.icon];
                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                  >
                    {Icon && (
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                    <span className="font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hobbies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              {t("skills.hobbiesTitle")}
            </h3>
            <div className="space-y-4">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                >
                  <div className="p-2 rounded-lg bg-amber-50">
                    <HobbyIcon icon={hobby.icon} />
                  </div>
                  <div>
                    <span className="font-medium text-gray-800 block">
                      {hobby.name}
                    </span>
                    {hobby.description && (
                      <span className="text-xs text-gray-500">
                        {hobby.description}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
