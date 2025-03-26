import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Importujte Link komponentu

const topics = [
  { name: "Úvod do problematiky", path: "/guide" },
  { name: "Oxidy", path: "/oxidy" },
  { name: "Hydroxidy", path: "/hydroxidy" },
  { name: "Sloučeniny kyslíku", path: "/slouceniny-kysliku" },
  { name: "Sloučeniny polokovů a nekovů", path: "/slouceniny-polokovu-a-nekovu" },
  { name: "Hydridy", path: "/hydridy" },
  { name: "Kyseliny - bezkyslíkaté, kyslíkaté", path: "/kyseliny" },
  { name: "Halogenidy", path: "/halogenidy" },
  { name: "Sulfidy", path: "/sulfidy" },
  { name: "Další soli bezkyslíkatých kyselin", path: "/soli-bezkyslikatych" },
  { name: "Soli kyslíkatých kyselin", path: "/soli-kyslikatych" },
  { name: "Funkční deriváty kyselin", path: "/funkcni-derivaty" },
  { name: "Ionty a atomové skupiny", path: "/ionty" },
  { name: "Názvosloví krystalohydrátů", path: "/nazvoslovi-krystalohydratu" },
  { name: "Komplexní sloučeniny", path: "/komplexni-slouceniny" },
];

interface SidebarProps {
  selectedTopic: string;
  onSelectTopic: (topic: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedTopic, onSelectTopic }) => {
  return (
    <nav className="space-y-1">
      {topics.map(({ name, path }) => (
        <Link
          to={path} // Použití komponenty Link pro navigaci
          key={name}
          onClick={() => onSelectTopic(name)}
          className={`w-full text-left px-4 py-3 flex items-center justify-between rounded-lg transition-colors ${
            selectedTopic === name
              ? "bg-blue-50 text-blue-700"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <span>{name}</span>
          <ChevronRight
            className={`h-5 w-5 ${
              selectedTopic === name ? "text-blue-500" : "text-gray-400"
            }`}
          />
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
