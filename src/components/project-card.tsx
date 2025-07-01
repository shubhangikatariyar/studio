'use client';

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
import { ExternalLink, Code, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = descriptionRef.current;
    // Check if the content is overflowing when it's in its clamped state
    if (el && el.scrollHeight > el.clientHeight) {
      setIsOverflowing(true);
    }
  }, [project.description]);

  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group bg-card/90 dark:bg-card/80">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-card-foreground">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col">
        <div className="relative aspect-[16/10] w-full mb-4 rounded-md overflow-hidden">
          {project.imageUrl.endsWith('.gif') ? (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
          ) : (
            <Image
              src={project.imageUrl}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={project.imageHint}
            />
          )}
        </div>
        <CardDescription
          ref={descriptionRef}
          className={cn(
            'text-muted-foreground text-sm flex-grow',
            !isExpanded && 'line-clamp-4'
          )}
        >
          {project.description}
        </CardDescription>
        {isOverflowing && (
          <Button
            variant="link"
            className="text-primary h-auto p-0 mt-2 self-start"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
          >
            {isExpanded ? 'View Less' : 'View More'}
            {isExpanded ? (
              <ChevronUp className="ml-1 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-1 h-4 w-4" />
            )}
          </Button>
        )}
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-end gap-2 pt-4 border-t border-border/50 mt-auto">
        {project.demoUrl && project.demoUrl !== '#' && (
          <Button variant="outline" asChild className="w-full sm:w-auto">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />{' '}
              {project.demoButtonText || 'View Demo'}
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
