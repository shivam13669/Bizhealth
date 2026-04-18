import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export default function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const navigate = useNavigate();

  return (
    <nav aria-label="Breadcrumb" className={cn(
      "flex items-center gap-2 text-sm",
      dark ? "text-blue-200" : "text-gray-600"
    )}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight className={cn("w-4 h-4", dark ? "text-blue-300" : "text-gray-400")} />
          )}
          {item.href ? (
            <button
              onClick={() => navigate(item.href!)}
              className={cn(
                "transition-colors cursor-pointer hover:underline",
                dark ? "text-blue-200 hover:text-white" : "text-gray-600 hover:text-primary"
              )}
            >
              {item.label}
            </button>
          ) : (
            <span className={cn("font-medium", dark ? "text-white" : "text-gray-900")}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
