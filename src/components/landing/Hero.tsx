import { heroConfig, skillComponents, socialLinks } from '@/config/Hero';
import { parseTemplate } from '@/lib/hero';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';
import Image from 'next/image';
import React from 'react';

import Container from '../common/Container';
import Skill from '../common/Skill';
import CV from '../svgs/CV';
import Chat from '../svgs/Chat';
import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const buttonIcons = {
  CV: CV,
  Chat: Chat,
};

export default function Hero() {
  const { name, title, avatar, skills, description, buttons } = heroConfig;

  const renderDescription = () => {
    const parts = parseTemplate(description.template, skills);

    return parts.map((part) => {
      if (part.type === 'skill' && 'skill' in part && part.skill) {
        const SkillComponent =
          skillComponents[part.skill.component as keyof typeof skillComponents];
        return (
          <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
            <SkillComponent />
          </Skill>
        );
      } else if (part.type === 'bold' && 'text' in part) {
        return (
          <b key={part.key} className="whitespace-pre-wrap text-secondary">
            {part.text}
          </b>
        );
      } else if (part.type === 'text' && 'text' in part) {
        return (
          <span key={part.key} className="whitespace-pre-wrap">
            {part.text}
          </span>
        );
      }
      return null;
    });
  };

  return (
    <Container className="mx-auto max-w-5xl animate-fade-in-blur">
      <div className="flex flex-col gap-8">
        {/* Image */}
        <div className="flex justify-start">
          <div className="relative">
            <Image
              src={avatar}
              alt="hero"
              width={120}
              height={120}
              className="size-32 rounded-2xl border-2 border-primary shadow-lg transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-secondary/10 to-accent/10 pointer-events-none" />
          </div>
        </div>

        {/* Text Area */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-2">
              Hey, I&apos;m <span className="bg-linear-to-r from-secondary to-accent bg-clip-text text-transparent">{name}</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-primary">
              {title}
            </p>
          </div>

          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-3 text-base md:text-lg text-muted-foreground leading-relaxed">
              {renderDescription()}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          {buttons.map((button, index) => {
            const IconComponent =
              buttonIcons[button.icon as keyof typeof buttonIcons];
            return (
              <Button
                key={index}
                variant={button.variant as 'outline' | 'default'}
                className={cn(
                  'group px-6 py-2.5 text-base font-medium transition-all duration-300',
                  button.variant === 'default' &&
                    'bg-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1',
                  button.variant === 'outline' &&
                    'border-2 border-primary hover:border-secondary hover:bg-secondary/5',
                )}
              >
                {IconComponent && <IconComponent />}
                <Link href={button.href}>{button.text}</Link>
              </Button>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="flex gap-4 pt-4">
          {socialLinks.map((link) => (
            <Tooltip key={link.name} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.href}
                  className="text-muted-foreground hover:text-secondary transition-colors duration-300 hover:scale-110 inline-flex"
                >
                  <span className="size-6">{link.icon}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </Container>
  );
}
