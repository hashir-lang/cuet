import type { LucideIcon } from 'lucide-react';
import {
  Atom,
  BookOpen,
  BookOpenText,
  Briefcase,
  Building2,
  CalendarDays,
  ChartColumnIncreasing,
  ClipboardCheck,
  Code,
  Cpu,
  Egg,
  Feather,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  Landmark,
  LibraryBig,
  Newspaper,
  PersonStanding,
  Pill,
  Plane,
  Scale,
  Settings,
  Sigma,
  Sprout,
  Stethoscope,
  Users,
  Wheat,
  Wrench,
  Activity,
  Bird,
  Gavel,
  Compass,
} from 'lucide-react';
import type { PlateKey } from '@/content/types';

export type PlateStyle = {
  /** Gradient stops, top-left to bottom-right. */
  from: string;
  to: string;
  /** Line colour for the lattice and the arch. */
  line: string;
  /** Colour of the main motif. */
  ink: string;
  main: LucideIcon;
  /** Two small supporting motifs placed beside the arch. */
  minor: [LucideIcon, LucideIcon];
};

/**
 * Art direction for each illustrated plate. Each discipline gets its own
 * colour family and motif so faculty pages feel distinct while sharing one system.
 */
export const plateStyles: Record<PlateKey, PlateStyle> = {
  management: { from: '#17493a', to: '#08201a', line: '#d9bf86', ink: '#f3e7c7', main: ChartColumnIncreasing, minor: [Briefcase, Compass] },
  computing: { from: '#123a46', to: '#071a20', line: '#8fc7c9', ink: '#d8f0ef', main: Code, minor: [Cpu, Sigma] },
  education: { from: '#a2461f', to: '#5a230c', line: '#f3d2b9', ink: '#fbeee3', main: GraduationCap, minor: [BookOpen, Users] },
  humanities: { from: '#45304f', to: '#1d1324', line: '#d9bf86', ink: '#f1e5c8', main: Feather, minor: [BookOpenText, Landmark] },
  poultry: { from: '#6d5c1f', to: '#33290b', line: '#eadba3', ink: '#fbf3d6', main: Egg, minor: [Bird, Wheat] },
  pharmacy: { from: '#1c4f57', to: '#0a2429', line: '#bfe2dc', ink: '#e6f6f2', main: FlaskConical, minor: [Pill, Atom] },
  nursing: { from: '#7d3138', to: '#3d1418', line: '#f3c9c6', ink: '#fdeceb', main: HeartPulse, minor: [Stethoscope, Activity] },
  'allied-health': { from: '#245349', to: '#0d2823', line: '#bfe0d4', ink: '#e7f5ef', main: PersonStanding, minor: [Activity, Users] },
  engineering: { from: '#33404b', to: '#141b21', line: '#e2a481', ink: '#f6e2d4', main: Settings, minor: [Wrench, Compass] },
  aviation: { from: '#1b4470', to: '#091b31', line: '#bcd4ec', ink: '#e8f1fb', main: Plane, minor: [Compass, Building2] },
  law: { from: '#4d2c1b', to: '#20120a', line: '#d9bf86', ink: '#f4e6c6', main: Scale, minor: [Gavel, Landmark] },
  agriculture: { from: '#405f25', to: '#1b2d0e', line: '#e8d9a0', ink: '#f8f1d2', main: Wheat, minor: [Sprout, ChartColumnIncreasing] },
  sciences: { from: '#2c3263', to: '#11142f', line: '#c9cff2', ink: '#eceffd', main: Sigma, minor: [ChartColumnIncreasing, Atom] },
  library: { from: '#5d3d22', to: '#28180b', line: '#d9bf86', ink: '#f6e8c9', main: LibraryBig, minor: [BookOpen, Feather] },
  campus: { from: '#b4542a', to: '#6e2c12', line: '#f6dcc6', ink: '#fdf1e7', main: Landmark, minor: [Building2, Sprout] },
  'student-life': { from: '#1f5e4b', to: '#0b2a22', line: '#d9bf86', ink: '#f4ead0', main: Users, minor: [BookOpen, Sprout] },
  admissions: { from: '#8a3a19', to: '#0c2c23', line: '#f0cfae', ink: '#fcefe2', main: ClipboardCheck, minor: [GraduationCap, CalendarDays] },
  news: { from: '#4c4539', to: '#16130e', line: '#d9bf86', ink: '#f2ead8', main: Newspaper, minor: [Feather, Landmark] },
  events: { from: '#17493a', to: '#0a231c', line: '#e2a481', ink: '#f8e6da', main: CalendarDays, minor: [Users, Landmark] },
};
