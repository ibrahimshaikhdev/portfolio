'use client';

import {
  BrainCircuit,
  Braces,
  Code2,
  Container,
  Database,
  Flame,
  GitBranch,
  Globe2,
  Hexagon,
  Layers3,
  Network,
  Rocket,
  Send,
  Server,
  Sigma,
  TerminalSquare,
  Workflow,
  Zap,
} from 'lucide-react';
import type { ElementType } from 'react';
import { cn } from '@/lib/utils';

const skillStyles: Record<string, { label: string; className: string; icon: ElementType }> = {
  'React.js': { label: 'React', className: 'bg-cyan-400/15 text-cyan-200 border-cyan-300/35', icon: Hexagon },
  'Next.js': { label: 'Next', className: 'bg-zinc-100/10 text-zinc-50 border-zinc-200/30', icon: Layers3 },
  TypeScript: { label: 'TS', className: 'bg-blue-500/15 text-blue-200 border-blue-300/35', icon: Code2 },
  'Tailwind CSS': { label: 'TW', className: 'bg-teal-400/15 text-teal-200 border-teal-300/35', icon: Zap },
  JavaScript: { label: 'JS', className: 'bg-yellow-300/15 text-yellow-100 border-yellow-300/35', icon: Braces },
  'HTML/CSS': { label: 'HTML', className: 'bg-orange-400/15 text-orange-100 border-orange-300/35', icon: Globe2 },
  Java: { label: 'Java', className: 'bg-red-500/15 text-red-100 border-red-300/35', icon: Server },
  NestJS: { label: 'Nest', className: 'bg-rose-500/15 text-rose-100 border-rose-300/35', icon: Hexagon },
  'Spring Boot': { label: 'Spring', className: 'bg-green-500/15 text-green-100 border-green-300/35', icon: Workflow },
  FastAPI: { label: 'Fast', className: 'bg-emerald-400/15 text-emerald-100 border-emerald-300/35', icon: Rocket },
  'REST API': { label: 'API', className: 'bg-sky-500/15 text-sky-100 border-sky-300/35', icon: Send },
  MySQL: { label: 'SQL', className: 'bg-blue-400/15 text-blue-100 border-blue-300/35', icon: Database },
  MongoDB: { label: 'MDB', className: 'bg-green-400/15 text-green-100 border-green-300/35', icon: Database },
  Firebase: { label: 'Fire', className: 'bg-amber-400/15 text-amber-100 border-amber-300/35', icon: Flame },
  Git: { label: 'Git', className: 'bg-orange-500/15 text-orange-100 border-orange-300/35', icon: GitBranch },
  GitHub: { label: 'GH', className: 'bg-purple-400/15 text-purple-100 border-purple-300/35', icon: GitBranch },
  Docker: { label: 'Docker', className: 'bg-sky-400/15 text-sky-100 border-sky-300/35', icon: Container },
  'VS Code': { label: 'Code', className: 'bg-blue-500/15 text-blue-100 border-blue-300/35', icon: Code2 },
  Postman: { label: 'Post', className: 'bg-orange-400/15 text-orange-100 border-orange-300/35', icon: Send },
  Vercel: { label: 'Vercel', className: 'bg-white/10 text-white border-white/30', icon: Rocket },
  'Machine Learning': { label: 'ML', className: 'bg-fuchsia-400/15 text-fuchsia-100 border-fuchsia-300/35', icon: BrainCircuit },
  Python: { label: 'Py', className: 'bg-yellow-400/15 text-yellow-100 border-yellow-300/35', icon: TerminalSquare },
  TensorFlow: { label: 'TF', className: 'bg-orange-400/15 text-orange-100 border-orange-300/35', icon: Sigma },
  'Data Analysis': { label: 'Data', className: 'bg-violet-400/15 text-violet-100 border-violet-300/35', icon: BrainCircuit },
  NLP: { label: 'NLP', className: 'bg-pink-400/15 text-pink-100 border-pink-300/35', icon: BrainCircuit },
  CNN: { label: 'CNN', className: 'bg-red-400/15 text-red-100 border-red-300/35', icon: BrainCircuit },
  'Medical AI': { label: 'Med', className: 'bg-emerald-400/15 text-emerald-100 border-emerald-300/35', icon: BrainCircuit },
  'Socket.io': { label: 'IO', className: 'bg-zinc-200/10 text-zinc-100 border-zinc-200/30', icon: Network },
};

export function SkillLogo({ name, compact = false }: { name: string; compact?: boolean }) {
  const style = skillStyles[name] ?? {
    label: name.slice(0, 4),
    className: 'bg-white/10 text-white border-white/25',
    icon: Code2,
  };
  const Icon = style.icon;

  return (
    <span
      className={cn(
        'inline-flex items-center border font-semibold shadow-[0_0_24px_rgba(255,255,255,0.04)] transition duration-300 group-hover:scale-[1.02]',
        compact ? 'gap-1 rounded-md px-2 py-1 text-[11px]' : 'gap-2 rounded-lg px-3 py-2 text-sm',
        style.className,
      )}
      title={name}
    >
      <Icon className={compact ? 'size-3.5' : 'size-4'} aria-hidden="true" />
      <span>{compact ? style.label : name}</span>
    </span>
  );
}
