import { ChevronRight, Clock, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChapterCardProps {
  number: number;
  title: string;
  description: string;
  hours: number;
  topics: string[];
  colorClass: string;
  isActive?: boolean;
  onClick?: () => void;
}

const ChapterCard = ({
  number,
  title,
  description,
  hours,
  topics,
  colorClass,
  isActive,
  onClick,
}: ChapterCardProps) => {
  return (
    <div
      className={cn(
        "chapter-card cursor-pointer group",
        isActive && "ring-2 ring-primary shadow-lg"
      )}
      onClick={onClick}
    >
      {/* Chapter Number Badge */}
      <div
        className={cn(
          "absolute -top-3 -left-3 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold font-serif text-lg shadow-lg",
          colorClass
        )}
      >
        {number}
      </div>

      <div className="pt-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1 pr-4">
            <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 mt-1" />
        </div>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{hours} hours</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{topics.length} topics</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {topics.slice(0, 3).map((topic, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
            >
              {topic}
            </span>
          ))}
          {topics.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
              +{topics.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
