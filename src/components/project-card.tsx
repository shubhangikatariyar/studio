import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/types';
import { ExternalLink, Code } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card/90 dark:bg-card/80">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-card-foreground">{project.title}</CardTitle>
        {/* Short description can be part of the main description now or kept minimal here */}
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="relative aspect-[16/10] w-full mb-4 rounded-md overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
        <CardDescription className="text-muted-foreground text-sm line-clamp-4 flex-grow">{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 pt-4 border-t border-border/50 mt-auto">
        {project.demoUrl && project.demoUrl !== '#' && (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> {project.demoButtonText || 'View Demo'}
            </a>
          </Button>
        )}
        {project.codeUrl && project.codeUrl !== '#' && (
          <Button variant="default" asChild className="w-full sm:w-auto">
            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
              <Code className="mr-2 h-4 w-4" /> View Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
