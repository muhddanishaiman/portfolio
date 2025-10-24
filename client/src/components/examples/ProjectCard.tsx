import ProjectCard from '../ProjectCard';

export default function ProjectCardExample() {
  return (
    <div className="p-6 max-w-sm">
      <ProjectCard
        title="Example Project"
        description="A sample project demonstrating the card layout with technologies and links."
        githubUrl="https://github.com"
        technologies={['React', 'TypeScript', 'Tailwind']}
      />
    </div>
  );
}
