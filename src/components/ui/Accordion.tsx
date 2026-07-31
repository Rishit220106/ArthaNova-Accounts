import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from "@/src/lib/utils";
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-border">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-serif text-xl text-text-primary font-medium pr-8">{title}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex-shrink-0 text-accent"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-text-secondary font-sans leading-relaxed text-base">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: { title: string; content: React.ReactNode }[];
  className?: string;
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, className, allowMultiple = false }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const handleItemClick = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={cn("w-full border-t border-border", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndices.includes(index)}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};
