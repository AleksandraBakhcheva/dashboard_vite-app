import { MouseEventHandler } from "react";

export type CardProps = {
  isFeatured?: boolean;
  children?: React.ReactNode;
};

export type BadgeProps = {
  variant?: "basic" | "clearable" | "rounded";
  colorScheme?: "light" | "primary" | "dark";
  children: React.ReactNode;
  onClear?: MouseEventHandler;
  onClick?: MouseEventHandler;
};

export type StackProps = {
  children: React.ReactNode;
  position?: string;
};

export type JobPositionProps = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};
