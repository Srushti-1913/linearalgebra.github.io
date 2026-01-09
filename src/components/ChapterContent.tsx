import { CheckCircle2, BookMarked, Calculator, Lightbulb } from "lucide-react";

interface Application {
  title: string;
  description: string;
  formula: string;
}

interface ChapterData {
  number: number;
  title: string;
  colorClass: string;
  content: {
    overview: string;
    keyPoints: string[];
    applications: Application[];
  };
}

interface ChapterContentProps {
  chapter: ChapterData;
}

const ChapterContent = ({ chapter }: ChapterContentProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm sticky top-24">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold font-serif text-2xl ${chapter.colorClass}`}
        >
          {chapter.number}
        </div>
        <div>
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Chapter {chapter.number}
          </h3>
          <p className="text-muted-foreground">{chapter.title}</p>
        </div>
      </div>

      {/* Overview */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BookMarked className="h-5 w-5 text-primary" />
          <h4 className="font-semibold text-foreground">Overview</h4>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {chapter.content.overview}
        </p>
      </div>

      {/* Key Points */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="h-5 w-5 text-secondary" />
          <h4 className="font-semibold text-foreground">Key Concepts</h4>
        </div>
        <ul className="space-y-3">
          {chapter.content.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-muted-foreground">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Applications */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Calculator className="h-5 w-5 text-accent" />
          <h4 className="font-semibold text-foreground">Engineering Applications</h4>
        </div>
        <div className="space-y-4">
          {chapter.content.applications.map((app, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-muted/50 border border-border/50"
            >
              <h5 className="font-medium text-foreground mb-2">{app.title}</h5>
              <p className="text-sm text-muted-foreground mb-3">
                {app.description}
              </p>
              <div className="math-block">
                <code className="text-xs">{app.formula}</code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChapterContent;
