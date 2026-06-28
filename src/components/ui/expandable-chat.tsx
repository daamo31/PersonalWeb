'use client';

import { Button } from '@/components/ui/button';
import { useHapticFeedback } from '@/hooks/use-haptic-feedback';
import { cn } from '@/lib/utils';
import { MessageCircle, X } from 'lucide-react';
import React, { useRef, useState } from 'react';

export type ChatPosition = 'bottom-right' | 'bottom-left';
export type ChatSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

const chatConfig = {
  dimensions: {
    sm: 'sm:max-w-sm sm:max-h-[500px]',
    md: 'sm:max-w-md sm:max-h-[600px]',
    lg: 'sm:max-w-lg sm:max-h-[700px]',
    xl: 'sm:max-w-xl sm:max-h-[800px]',
    full: 'sm:w-full sm:h-full',
  },
  positions: {
    'bottom-right': 'bottom-5 right-5',
    'bottom-left': 'bottom-5 left-5',
  },
  chatPositions: {
    'bottom-right': 'sm:bottom-[calc(100%+10px)] sm:right-0',
    'bottom-left': 'sm:bottom-[calc(100%+10px)] sm:left-0',
  },
  states: {
    open: 'pointer-events-auto opacity-100 visible scale-100 translate-y-0',
    closed:
      'pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5',
  },
};

interface ExpandableChatProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: ChatPosition;
  size?: ChatSize;
  icon?: React.ReactNode;
}

const ExpandableChat: React.FC<ExpandableChatProps> = ({
  className,
  position = 'bottom-right',
  size = 'md',
  icon,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div
      className={cn(
        `fixed ${chatConfig.positions[position]} z-[70] hover:cursor-pointer`,
        className,
      )}
      {...props}
    >
      <div
        ref={chatRef}
        className={cn(
          'flex flex-col bg-background border sm:rounded-lg shadow-md overflow-hidden transition-all duration-250 ease-out sm:absolute sm:w-[90vw] sm:h-[80vh] fixed inset-0 w-full h-full sm:inset-auto',
          chatConfig.chatPositions[position],
          chatConfig.dimensions[size],
          isOpen ? chatConfig.states.open : chatConfig.states.closed,
          className,
        )}
      >
        {children}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 sm:hidden"
          onClick={toggleChat}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="pointer-events-none absolute -top-11 right-0 hidden items-center gap-2 rounded-full border border-primary/20 bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary shadow-lg shadow-black/10 backdrop-blur sm:flex">
        <span className="size-2 rounded-full bg-green-500 shadow-[0_0_0_4px_rgba(34,197,94,0.14)]" />
        AI assistant
      </div>
      <ExpandableChatToggle
        icon={icon}
        isOpen={isOpen}
        toggleChat={toggleChat}
      />
    </div>
  );
};

ExpandableChat.displayName = 'ExpandableChat';

const ExpandableChatHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    className={cn('flex items-center justify-between p-4 border-b', className)}
    {...props}
  />
);

ExpandableChatHeader.displayName = 'ExpandableChatHeader';

const ExpandableChatBody: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn('flex-grow overflow-y-auto', className)} {...props} />;

ExpandableChatBody.displayName = 'ExpandableChatBody';

const ExpandableChatFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => <div className={cn('border-t p-4', className)} {...props} />;

ExpandableChatFooter.displayName = 'ExpandableChatFooter';

interface ExpandableChatToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  isOpen: boolean;
  toggleChat: () => void;
}

const ExpandableChatToggle: React.FC<ExpandableChatToggleProps> = ({
  className,
  icon,
  isOpen,
  toggleChat,
  ...props
}) => {
  const { triggerHaptic, isMobile } = useHapticFeedback();

  const handleToggle = () => {
    // Trigger haptic feedback on mobile devices
    if (isMobile()) {
      triggerHaptic('selection');
    }
    toggleChat();
  };

  return (
    <Button
      variant="default"
      onClick={handleToggle}
      className={cn(
        'flex h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-linear-to-br from-primary via-primary/90 to-accent text-primary-foreground shadow-[0_18px_40px_rgba(14,54,76,0.28)] ring-4 ring-primary/10 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_22px_50px_rgba(14,54,76,0.35)]',
        className,
      )}
      {...props}
    >
      {isOpen ? (
        <X className="h-6 w-6" />
      ) : (
        icon || <MessageCircle className="h-6 w-6" />
      )}
    </Button>
  );
};

ExpandableChatToggle.displayName = 'ExpandableChatToggle';

export {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
};