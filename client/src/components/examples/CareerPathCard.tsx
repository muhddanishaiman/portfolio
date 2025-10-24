import CareerPathCard from '../CareerPathCard';
import { Code2 } from 'lucide-react';

export default function CareerPathCardExample() {
  return (
    <div className="p-6 max-w-2xl">
      <CareerPathCard
        title="Full Stack Development"
        icon={<Code2 className="h-6 w-6" />}
        description="Build complete web applications from front to back"
        difficulty="Intermediate"
        whyChoose={[
          'High demand in the job market',
          'Work on entire product lifecycle',
        ]}
        whatYouLearn={[
          'Frontend frameworks (React, Vue)',
          'Backend development (Node.js, Python)',
        ]}
        courses={[
          {
            title: 'Full Stack Web Development',
            provider: 'edX',
            url: 'https://www.edx.org',
            duration: '8 weeks',
          },
        ]}
      />
    </div>
  );
}
