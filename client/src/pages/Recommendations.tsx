import CareerPathCard from "@/components/CareerPathCard";
import { Database, Shield, Code2, Brain, Smartphone, Server, Cpu, MonitorSmartphone } from "lucide-react";
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
      title: "Machine Learning",
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
        "Supervised and unsupervised learning",
        "Model training and optimization",
        "MLOps and model deployment",
        "TensorFlow, PyTorch, and Keras",
        "Computer vision and NLP applications",
      ],
      courses: [
        {
          title: "Machine Learning",
          provider: "edX - MIT",
          url: "https://www.edx.org/course/machine-learning-with-python-from-linear-models-to",
          duration: "12 weeks",
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
      title: "Cloud Computing",
      icon: <Server className="h-6 w-6" />,
      description: "Build and manage scalable infrastructure and services in the cloud.",
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
    {
      title: "Systems Engineering",
      icon: <Cpu className="h-6 w-6" />,
      description: "Design and optimize complex computer systems, operating systems, and low-level software.",
      difficulty: "Advanced" as const,
      whyChoose: [
        "Work on foundational technologies",
        "Deep understanding of how computers work",
        "High-impact roles at major tech companies",
        "Solve challenging performance problems",
      ],
      whatYouLearn: [
        "Operating systems and kernels",
        "Computer architecture and assembly",
        "Systems programming in C/C++/Rust",
        "Memory management and concurrency",
        "Performance optimization and debugging",
      ],
      courses: [
        {
          title: "Computer Science Fundamentals",
          provider: "edX - Harvard CS50",
          url: "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
          duration: "12 weeks",
        },
        {
          title: "Introduction to Operating Systems",
          provider: "edX - Georgia Tech",
          url: "https://www.edx.org/course/introduction-to-operating-systems",
          duration: "10 weeks",
        },
        {
          title: "Computer Architecture",
          provider: "edX - Princeton",
          url: "https://www.edx.org/course/computer-architecture",
          duration: "8 weeks",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: <MonitorSmartphone className="h-6 w-6" />,
      description: "Create beautiful, responsive user interfaces and interactive web experiences.",
      difficulty: "Beginner" as const,
      whyChoose: [
        "See your work come to life immediately",
        "Strong job market demand",
        "Creative and technical blend",
        "Great entry point into tech",
      ],
      whatYouLearn: [
        "HTML, CSS, and JavaScript fundamentals",
        "Modern frameworks (React, Vue, Angular)",
        "Responsive design and accessibility",
        "State management and routing",
        "Performance optimization and SEO",
      ],
      courses: [
        {
          title: "CS50's Web Programming",
          provider: "edX - Harvard",
          url: "https://www.edx.org/course/cs50s-web-programming-with-python-and-javascript",
          duration: "12 weeks",
        },
        {
          title: "Introduction to Web Development",
          provider: "edX - W3C",
          url: "https://www.edx.org/course/web-development",
          duration: "8 weeks",
        },
        {
          title: "Responsive Web Design",
          provider: "edX - W3C",
          url: "https://www.edx.org/course/responsive-web-design",
          duration: "6 weeks",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Code2 className="h-6 w-6" />,
      description: "Build robust server-side applications, APIs, and databases that power applications.",
      difficulty: "Intermediate" as const,
      whyChoose: [
        "Core of every application",
        "High demand for skilled developers",
        "Work with data and business logic",
        "Strong foundation for system design",
      ],
      whatYouLearn: [
        "Server-side languages (Node.js, Python, Java)",
        "RESTful APIs and GraphQL",
        "Databases (SQL and NoSQL)",
        "Authentication and authorization",
        "Microservices and scalability",
      ],
      courses: [
        {
          title: "Backend Development",
          provider: "edX - IBM",
          url: "https://www.edx.org/course/backend-development",
          duration: "10 weeks",
        },
        {
          title: "Introduction to Databases",
          provider: "edX - Stanford",
          url: "https://www.edx.org/course/databases",
          duration: "12 weeks",
        },
        {
          title: "API Design and Development",
          provider: "edX - Microsoft",
          url: "https://www.edx.org/course/api-development",
          duration: "8 weeks",
        },
      ],
    },
    {
      title: "Deep Learning",
      icon: <Brain className="h-6 w-6" />,
      description: "Build neural networks and advanced AI models for complex pattern recognition tasks.",
      difficulty: "Advanced" as const,
      whyChoose: [
        "Cutting-edge AI research and applications",
        "Revolutionary impact across industries",
        "Highest compensation in tech",
        "Work on future-defining technology",
      ],
      whatYouLearn: [
        "Neural networks and architectures",
        "Convolutional and recurrent networks",
        "Transformers and attention mechanisms",
        "PyTorch and TensorFlow frameworks",
        "Computer vision and NLP models",
      ],
      courses: [
        {
          title: "Deep Learning Fundamentals",
          provider: "edX - IBM",
          url: "https://www.edx.org/course/deep-learning-fundamentals",
          duration: "10 weeks",
        },
        {
          title: "Neural Networks and Deep Learning",
          provider: "edX - MIT",
          url: "https://www.edx.org/course/neural-networks-deep-learning",
          duration: "12 weeks",
        },
        {
          title: "Applied Deep Learning",
          provider: "edX - Berkeley",
          url: "https://www.edx.org/course/applied-deep-learning",
          duration: "14 weeks",
        },
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <section className="container mx-auto max-w-6xl px-6 py-16">
        <div className="mb-12 space-y-4">
          <h1 className="font-serif text-4xl font-bold" data-testid="text-page-title">
            CS Paths
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed" data-testid="text-page-description">
            Different career paths in computer science and technology. Each path includes curated
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
                Have a feel of each path and see what you are comfortable or interested in
              </h3>
              <p className="text-muted-foreground max-w-2xl" data-testid="text-closing-description">
                There are plenty of other paths out there such as quantum computing, full stack development and UI/UX, so explore everything that computer science has to offer and see what excites you the most!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
