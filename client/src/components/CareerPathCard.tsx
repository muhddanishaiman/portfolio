import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, BookOpen } from "lucide-react";

interface Course {
  title: string;
  provider: string;
  url: string;
  duration: string;
}

interface CareerPathCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  whyChoose: string[];
  whatYouLearn: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  courses: Course[];
}

export default function CareerPathCard({
  title,
  icon,
  description,
  whyChoose,
  whatYouLearn,
  difficulty,
  courses,
}: CareerPathCardProps) {
  const difficultyColors = {
    Beginner: "secondary",
    Intermediate: "default",
    Advanced: "destructive",
  } as const;

  return (
    <Card className="flex h-full flex-col p-8 border-4 border-[#8B7355] bg-[#FAF3E8]">
      <CardHeader className="space-y-4 px-0 pt-0">
        <div className="flex items-center justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary">
            {icon}
          </div>
          <Badge variant={difficultyColors[difficulty]} data-testid={`badge-difficulty-${difficulty.toLowerCase()}`}>
            {difficulty}
          </Badge>
        </div>
        <div>
          <CardTitle className="font-serif text-2xl" data-testid={`text-career-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {title}
          </CardTitle>
          <CardDescription className="mt-2 leading-relaxed" data-testid={`text-career-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-6 px-0">
        <div>
          <h4 className="mb-3 font-semibold">Why Choose This Path?</h4>
          <ul className="space-y-2">
            {whyChoose.map((reason, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 text-primary">•</span>
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">What You'll Learn</h4>
          <ul className="space-y-2">
            {whatYouLearn.map((skill, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1 text-primary">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 font-semibold">Recommended Courses</h4>
          <div className="space-y-3">
            {courses.map((course, index) => (
              <a
                key={index}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md border p-3 hover-elevate active-elevate-2"
                data-testid={`link-course-${course.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <p className="font-medium text-sm">{course.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {course.provider} • {course.duration}
                    </p>
                  </div>
                  <ExternalLink className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-0 pb-0">
        <Button variant="outline" className="w-full" data-testid={`button-explore-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <BookOpen className="mr-2 h-4 w-4" />
          Explore {title}
        </Button>
      </CardFooter>
    </Card>
  );
}
