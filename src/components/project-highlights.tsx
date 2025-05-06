import { ProjectCard } from './project-card';
import type { Project } from '@/types';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Recommendation Engine',
    description: 'Developed a personalized recommendation system using collaborative filtering and deep learning techniques. This engine improved user engagement by 25%.',
    imageUrl: 'https://picsum.photos/seed/project1/400/300',
    imageHint: 'abstract network graph',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '2',
    title: 'Natural Language Processing Chatbot',
    description: 'Built an intelligent chatbot for customer service automation, capable of understanding and responding to complex queries with 90% accuracy.',
    imageUrl: 'https://picsum.photos/seed/project2/400/300',
    imageHint: 'chatbot interface conversation',
    demoUrl: '#',
    codeUrl: '#',
  },
  {
    id: '3',
    title: 'Computer Vision Object Detection',
    description: 'Implemented a real-time object detection model for autonomous systems using YOLOv5, achieving high precision in diverse environments.',
    imageUrl: 'https://picsum.photos/seed/project3/400/300',
    imageHint: 'object detection bounding',
    demoUrl: '#',
    codeUrl: '#',
  },
  // Add more projects here later
];

export function ProjectHighlights() {
  return (
    <section aria-labelledby="project-highlights-title">
      <h2 id="project-highlights-title" className="text-3xl font-bold text-foreground mb-8">
        Project Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8"> 
        {/* Kept as 1 column for now to better fit typical portfolio item display in the right column. Can be changed to md:grid-cols-2 if desired */}
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* Placeholder for adding more projects */}
      {/* 
      <div className="mt-8 text-center">
        <Button variant="outline">Load More Projects</Button>
      </div> 
      */}
    </section>
  );
}
