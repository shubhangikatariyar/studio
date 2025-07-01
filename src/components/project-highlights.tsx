
import { ProjectCard } from './project-card';
import type { Project } from '@/types';
// import { Button } from '@/components/ui/button'; // Optional: for "Load More"

const projectsData: Project[] = [
  {
    id: '1',
    title: 'Survival Prediction of Renal Cell Carcinoma Patients using ML',
    description: 'Developed a machine learning model to predict the survival outcomes of Renal Cell Carcinoma patients, leveraging clinical data and segmented tumor features from CT scans to improve prognostic accuracy. This research was published in an IEEE conference.',
    imageUrl: 'https://raw.githubusercontent.com/shubhangikatariyar/studio/master/public/rcc-prediction-cover.png',
    imageHint: 'CT scan tumor',
    demoUrl: 'https://ieeexplore.ieee.org/document/10455029',
    demoButtonText: 'View Paper'
  },
  {
    id: '2',
    title: 'Cine AI: Movie Recommendation System',
    description: 'Developed a content-based movie recommendation system using NLP to analyze movie plots and generate similarity scores. The user-friendly interface, built with Streamlit and deployed on Heroku, provides personalized movie suggestions, showcasing practical ML application in interactive web apps.',
    imageUrl: 'https://raw.githubusercontent.com/shubhangikatariyar/Cine-AI-Movie-Recommendation-System/main/CineAI.gif',
    imageHint: 'movie recommendations interface',
    demoUrl: 'https://www.youtube.com/watch?v=F6STdcI0zDA',
    demoButtonText: 'View Demo',
    codeUrl: 'https://github.com/shubhangikatariyar/Cine-AI-Movie-Recommendation-System/',
  },
  {
    id: '3',
    title: 'Sahayak Bot - Pick and Place Bot',
    description: 'Engineered a robotic arm system, "Sahayak Bot", for automated pick-and-place tasks. The project involved integrating computer vision for object detection and robotics for precise manipulation.',
    imageUrl: 'https://raw.githubusercontent.com/shubhangikatariyar/Sahayak-Bot/main/pick_and_place.gif',
    imageHint: 'robotic arm',
    demoUrl: 'https://www.youtube.com/watch?v=nRCZaozm6M4',
    codeUrl: 'https://github.com/shubhangikatariyar/Sahayak-Bot',
  },
  {
    id: '4',
    title: 'Hippi Hangry Game',
    description: 'A vibrant 2D arcade game built with Unity (C#), where players control a hungry hippie dodging dangers to eat watermelons. Key features include custom physics, event-driven scoring, and performance optimizations like object pooling.',
    imageUrl: 'https://raw.githubusercontent.com/shubhangikatariyar/HippiHangryGame/main/Hippi.gif',
    imageHint: 'arcade game',
    demoUrl: 'https://www.youtube.com/shorts/TC2j8moP46k',
    demoButtonText: 'View Demo',
    codeUrl: 'https://github.com/shubhangikatariyar/HippiHangryGame',
  },
  {
    id: '5',
    title: 'LED Chaser Using 8051',
    description: 'A simple yet fascinating project that demonstrates the use of the 8051 microcontroller to create a chaser effect with LEDs.',
    imageUrl: 'https://raw.githubusercontent.com/shubhangikatariyar/LED-Chaser-Using-8051/main/led.gif',
    imageHint: 'LED chaser circuit',
    demoUrl: 'https://www.youtube.com/watch?v=iF4nVP354X0',
    codeUrl: 'https://github.com/shubhangikatariyar/LED-Chaser-Using-8051',
  },
];

export function ProjectHighlights() {
  return (
    <section id="projects" aria-labelledby="project-highlights-title" className="py-8">
      <h2 id="project-highlights-title" className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
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
