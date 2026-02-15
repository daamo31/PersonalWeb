import React from 'react';

export interface SetupContentItem {
  type: 'download' | 'instruction' | 'shortcut' | 'prompt';
  name?: string;
  description?: string;
  href?: string;
  text?: string;
}

export interface SetupStep {
  id: number;
  title: string;
  icon: React.ReactNode;
  content: SetupContentItem[];
}

// Setup Configuration - Currently disabled
export const steps: SetupStep[] = [];
export const settingsJson = '';
