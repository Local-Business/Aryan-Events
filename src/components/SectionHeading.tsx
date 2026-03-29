import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "mb-16",
        centered ? "text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <span className="text-gold uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-6xl font-serif text-charcoal mb-6 leading-tight">
        {title}
      </h2>
      <div className={cn(
        "h-px bg-gold/30 w-24",
        centered ? "mx-auto" : "mr-auto"
      )} />
    </motion.div>
  );
}
