import React from 'react';
import { cn } from "@/src/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from './Card';
import { Button } from './Button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkHref,
  className
}) => {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardHeader>
        <div className="h-14 w-14 rounded-lg bg-surface-hover border border-border flex items-center justify-center mb-6 text-accent">
          {icon}
        </div>
        <CardTitle className="text-2xl mb-3">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content could go here */}
      </CardContent>
      {linkText && (
        <CardFooter className="pt-0 pb-8 px-8 mt-auto">
          <Button variant="ghost" withArrow className="px-0 h-auto font-semibold">
            {linkText}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
