
import { ProjectCard } from './project-card';
import type { Project } from '@/types';
// import { Button } from '@/components/ui/button'; // Optional: for "Load More"

const basePath = process.env.NODE_ENV === 'production' ? '/studio' : '';

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Survival Prediction of Renal Cell Carcinoma Patients using ML',
    description: 'Developed a machine learning model to predict the survival outcomes of Renal Cell Carcinoma patients, leveraging clinical data and segmented tumor features from CT scans to improve prognostic accuracy. This research was published in an IEEE conference.',
    imageUrl: `${basePath}/rcc-prediction-cover.png`,
    imageHint: 'CT scan tumor',
    demoUrl: 'https://ieeexplore.ieee.org/document/10455029',
    demoButtonText: 'View Paper'
  },
  {
    id: '2',
    title: 'Sahayak Bot - Pick and Place Bot',
    description: 'Engineered a robotic arm system, "Sahayak Bot", for automated pick-and-place tasks. The project involved integrating computer vision for object detection and robotics for precise manipulation.',
    imageUrl: 'https://raw.githubusercontent.com/shubhangikatariyar/Sahayak-Bot/main/pick_and_place.gif?raw=true',
    imageHint: 'robotic arm',
    demoUrl: 'https://www.youtube.com/watch?v=nRCZaozm6M4',
    codeUrl: 'https://github.com/shubhangikatariyar/Sahayak-Bot',
  },
  {
    id: '3',
    title: 'Hippi Hangry Game',
    description: 'A vibrant 2D arcade game built with Unity (C#), where players control a perpetually hungry hippie dodging danger lines to devour watermelons. I engineered the core systems from scratch, implementing Unity’s Physics2D with Rigidbody dynamics for snappy movement and Collider2D-based AABB detection for efficient watermelon collection and hazard avoidance. The architecture leverages event-driven design (via ScriptableObjects) for scoring and UI updates, while a state machine cleanly handles game flow between menus, gameplay, and pause states. To optimize performance, I integrated object pooling for obstacle generation, reducing instantiation overhead.',
    imageUrl: 'https://raw.githubusercontent.com/shubhangikatariyar/HippiHangryGame/main/Hippi.gif?raw=true',
    imageHint: 'arcade game',
    demoUrl: 'https://www.youtube.com/shorts/TC2j8moP46k',
    demoButtonText: 'View Demo',
    codeUrl: 'https://github.com/shubhangikatariyar/HippiHangryGame',
  },
  {
    id: '4',
    title: 'AI-Powered Recommendation System',
    description: 'Designed and implemented a recommendation engine using collaborative filtering techniques to provide personalized content suggestions, improving user engagement and content discovery.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'recommendation system',
  },
];

export function ProjectHighlights() {
  return (
    <section id="projects" aria-labelledby="project-highlights-title" className="py-8">
      <h2 id="project-highlights-title" className="text-3xl font-bold text-gray-100 mb-8 text-center md:text-left">
        <span role="img" aria-label="Sparkles emoji" className="mr-2">✨</span>
        Project Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> 
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
