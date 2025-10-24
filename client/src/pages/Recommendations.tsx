import CareerPathCard from "@/components/CareerPathCard";
import { Database, Shield, Code2, Brain, Smartphone, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Recommendations() {
  const careerPaths = [
    {
      title: "Data Science",
      icon: <Database className="h-6 w-6" />,
      description: "Analyze complex datasets and build predictive models to drive data-informed decisions.",
      difficulty: "Intermediate" as const,
      whyChoose: [
        "High demand across all industries",
        "Competitive salaries and growth opportunities",
        "Work with cutting-edge AI and ML technologies",
        "Make measurable impact with insights",
      ],
      whatYouLearn: [
        "Python, R, and SQL for data analysis",
        "Machine learning algorithms and frameworks",
        "Statistical modeling and hypothesis testing",
        "Data visualization with Tableau, Power BI",
        "Big data tools like Spark and Hadoop",
      ],
      courses: [
        {
          title: "Data Science Fundamentals",
          provider: "edX - Harvard",
          url: "https://www.edx.org/course/data-science-fundamentals",
          duration: "10 weeks",
        },
        {
          title: "Machine Learning",
          provider: "edX - MIT",
          url: "https://www.edx.org/course/machine-learning-with-python-from-linear-models-to",
          duration: "12 weeks",
        },
        {
          title: "Applied Data Science with Python",
          provider: "edX - University of Michigan",
          url: "https://www.edx.org/course/applied-data-science-with-python",
          duration: "16 weeks",
        },
      ],
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="h-6 w-6" />,
      description: "Protect systems, networks, and data from digital attacks and security breaches.",
      difficulty: "Advanced" as const,
      whyChoose: [
        "Critical role in every organization",
        "Constant challenge and problem-solving",
        "Excellent job security and growth",
        "Protect businesses and individuals",
      ],
      whatYouLearn: [
        "Network security and cryptography",
        "Ethical hacking and penetration testing",
        "Security compliance and risk management",
        "Incident response and forensics",
        "Cloud security and DevSecOps",
      ],
      courses: [
        {
          title: "Cybersecurity Fundamentals",
          provider: "edX - RIT",
          url: "https://www.edx.org/course/cybersecurity-fundamentals",
          duration: "8 weeks",
        },
        {
          title: "Ethical Hacking Essentials",
          provider: "edX - University of Washington",
          url: "https://www.edx.org/course/ethical-hacking-essentials-ehe",
          duration: "6 weeks",
        },
        {
          title: "Introduction to Cyber Security",
          provider: "edX - NYU",
          url: "https://www.edx.org/course/introduction-to-cybersecurity",
          duration: "12 weeks",
        },
      ],
    },
    {
      title: "Full Stack Development",
      icon: <Code2 className="h-6 w-6" />,
      description: "Build complete web applications from frontend interfaces to backend services and databases.",
      difficulty: "Beginner" as const,
      whyChoose: [
        "Versatile skills applicable to any project",
        "Strong job market demand",
        "See your work come to life immediately",
        "Freedom to work as freelancer or in teams",
      ],
      whatYouLearn: [
        "HTML, CSS, and JavaScript fundamentals",
        "Modern frameworks (React, Vue, Angular)",
        "Backend development (Node.js, Python, Java)",
        "Databases (SQL and NoSQL)",
        "APIs, authentication, and deployment",
      ],
      courses: [
        {
          title: "CS50's Web Programming",
          provider: "edX - Harvard",
          url: "https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript",
          duration: "12 weeks",
        },
        {
          title: "Full Stack Development",
          provider: "edX - HKU",
          url: "https://www.edx.org/course/full-stack-web-development",
          duration: "16 weeks",
        },
        {
          title: "Introduction to Web Development",
          provider: "edX - W3C",
          url: "https://www.edx.org/course/web-development",
          duration: "8 weeks",
        },
      ],
    },
    {
      title: "Machine Learning Engineering",
      icon: <Brain className="h-6 w-6" />,
      description: "Design and deploy intelligent systems that learn from data and improve over time.",
      difficulty: "Advanced" as const,
      whyChoose: [
        "At the forefront of AI revolution",
        "Solve complex real-world problems",
        "Extremely high compensation potential",
        "Work on innovative cutting-edge projects",
      ],
      whatYouLearn: [
        "Deep learning and neural networks",
        "Model training and optimization",
        "MLOps and model deployment",
        "TensorFlow, PyTorch, and Keras",
        "Computer vision and NLP applications",
      ],
      courses: [
        {
          title: "Deep Learning Fundamentals",
          provider: "edX - IBM",
          url: "https://www.edx.org/course/deep-learning-fundamentals",
          duration: "10 weeks",
        },
        {
          title: "Machine Learning Engineering",
          provider: "edX - UC San Diego",
          url: "https://www.edx.org/course/machine-learning-engineering",
          duration: "14 weeks",
        },
        {
          title: "AI For Everyone",
          provider: "edX - IBM",
          url: "https://www.edx.org/course/ai-for-everyone",
          duration: "6 weeks",
        },
      ],
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Create native and cross-platform mobile applications for iOS and Android devices.",
      difficulty: "Intermediate" as const,
      whyChoose: [
        "Mobile-first world with growing demand",
        "Build apps used by millions daily",
        "Opportunities in startups and enterprises",
        "Flexibility to go indie or work in teams",
      ],
      whatYouLearn: [
        "iOS development with Swift/SwiftUI",
        "Android development with Kotlin",
        "Cross-platform with React Native/Flutter",
        "Mobile UI/UX best practices",
        "App deployment and monetization",
      ],
      courses: [
        {
          title: "Mobile Application Development",
          provider: "edX - Harvard",
          url: "https://www.edx.org/course/cs50s-mobile-app-development-with-react-native",
          duration: "12 weeks",
        },
        {
          title: "Android App Development",
          provider: "edX - Google",
          url: "https://www.edx.org/course/android-app-development",
          duration: "10 weeks",
        },
        {
          title: "iOS Development Fundamentals",
          provider: "edX - Curtin",
          url: "https://www.edx.org/course/ios-development",
          duration: "8 weeks",
        },
      ],
    },
    {
      title: "DevOps Engineering",
      icon: <Server className="h-6 w-6" />,
      description: "Bridge development and operations to automate and streamline software delivery processes.",
      difficulty: "Intermediate" as const,
      whyChoose: [
        "Critical for modern software development",
        "High demand, lower competition",
        "Work with latest cloud technologies",
        "Enable teams to ship faster and safer",
      ],
      whatYouLearn: [
        "CI/CD pipelines and automation",
        "Docker and Kubernetes orchestration",
        "Cloud platforms (AWS, Azure, GCP)",
        "Infrastructure as Code (Terraform)",
        "Monitoring and observability tools",
      ],
      courses: [
        {
          title: "Introduction to DevOps",
          provider: "edX - Linux Foundation",
          url: "https://www.edx.org/course/introduction-to-devops",
          duration: "8 weeks",
        },
        {
          title: "DevOps Essentials",
          provider: "edX - Microsoft",
          url: "https://www.edx.org/course/devops-essentials",
          duration: "6 weeks",
        },
        {
          title: "Cloud Computing Fundamentals",
          provider: "edX - IBM",
          url: "https://www.edx.org/course/cloud-computing-fundamentals",
          duration: "10 weeks",
        },
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 space-y-4">
          <h1 className="font-serif text-4xl font-bold" data-testid="text-page-title">
            Computer Science Career Guide
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-page-description">
            Explore different career paths in computer science and technology. Each path includes curated
            EdX courses to help you get started and understand what it's like to work in that field.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {careerPaths.map((path, index) => (
            <CareerPathCard key={index} {...path} />
          ))}
        </div>

        <div className="mt-16 space-y-8">
          <div className="rounded-lg border bg-card p-8">
            <h2 className="mb-4 font-serif text-2xl font-semibold" data-testid="text-additional-resources-heading">
              Additional Resources
            </h2>
            <div className="space-y-3">
              <a
                href="https://www.edx.org/learn/computer-science"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border p-4 hover-elevate active-elevate-2"
                data-testid="link-resource-edx"
              >
                <div>
                  <p className="font-medium">Browse All CS Courses on edX</p>
                  <p className="text-sm text-muted-foreground">Explore hundreds of courses from top universities</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://github.com/ossu/computer-science"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border p-4 hover-elevate active-elevate-2"
                data-testid="link-resource-ossu"
              >
                <div>
                  <p className="font-medium">Open Source CS Curriculum</p>
                  <p className="text-sm text-muted-foreground">Free self-taught education in Computer Science</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </a>
              <a
                href="https://roadmap.sh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-md border p-4 hover-elevate active-elevate-2"
                data-testid="link-resource-roadmap"
              >
                <div>
                  <p className="font-medium">Developer Roadmaps</p>
                  <p className="text-sm text-muted-foreground">Step-by-step guides for different tech career paths</p>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block rounded-lg bg-primary/10 p-8">
              <h3 className="mb-3 font-serif text-xl font-semibold" data-testid="text-closing-message">
                Remember: The Best Path is the One You're Passionate About
              </h3>
              <p className="text-muted-foreground max-w-2xl" data-testid="text-closing-description">
                Don't feel pressured to choose immediately. Try out a few courses, build small projects,
                and see what excites you the most. Your career path can evolve over time!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
