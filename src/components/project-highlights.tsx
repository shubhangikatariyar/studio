import { ProjectCard } from './project-card';
import type { Project } from '@/types';
// import { Button } from '@/components/ui/button'; // Optional: for "Load More"

const projectsData: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Recommendation Engine',
    description: 'Developed a personalized recommendation system using collaborative filtering and deep learning techniques. This engine improved user engagement by 25% and demonstrated proficiency in Python, TensorFlow, and Scikit-learn.',
    imageUrl: 'https://picsum.photos/seed/recommender/600/400',
    imageHint: 'abstract network graph',
    demoUrl: '#', // Replace with actual demo link
    codeUrl: '#', // Replace with actual code link
  },
  {
    id: '2',
    title: 'Natural Language Processing Chatbot',
    description: 'Built an intelligent chatbot for customer service automation, capable of understanding and responding to complex queries with 90% accuracy using NLTK, SpaCy, and Rasa.',
    imageUrl: 'https://picsum.photos/seed/chatbotnlp/600/400',
    imageHint: 'chatbot interface conversation',
    demoUrl: '#', // Replace with actual demo link
    codeUrl: '#', // Replace with actual code link
  },
  {
    id: '3',
    title: 'Computer Vision Object Detection',
    description: 'Implemented a real-time object detection model for autonomous systems using YOLOv5 and OpenCV, achieving high precision in diverse environments for traffic monitoring.',
    imageUrl: 'https://picsum.photos/seed/cvobject/600/400',
    imageHint: 'object detection bounding',
    demoUrl: '#', // Replace with actual demo link
    codeUrl: '#', // Replace with actual code link
  },
  // Add more projects here later as needed
];

export function ProjectHighlights() {
  return (
    <section id="projects" aria-labelledby="project-highlights-title" className="py-8">
      <h2 id="project-highlights-title" className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
        Project Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* Placeholder for adding more projects or a "Load More" button
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">View More Projects on GitHub</Button> 
      </div> 
      */}
    </section>
  );
}
