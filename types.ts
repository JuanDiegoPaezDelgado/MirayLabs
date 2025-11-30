import React from 'react';

export enum Category {
  ALL = 'Todos',
  VIDEO = 'Video',
  MUSIC = 'Música',
  GAMES = 'Gaming',
  VPN = 'VPN/Seguridad',
  EDUCATION = 'Educación',
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  slots: number;
  category: Category;
  logoColor: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}