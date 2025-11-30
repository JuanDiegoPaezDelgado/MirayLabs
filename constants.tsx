import { Category, Service } from './types';

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Netflix Premium',
    description: 'Películas, series y documentales ilimitados en 4K.',
    price: 4.50,
    slots: 4,
    category: Category.VIDEO,
    logoColor: 'bg-red-600',
    icon: 'N'
  },
  {
    id: '2',
    name: 'Spotify Family',
    description: 'Música sin anuncios, reproducción offline y sonido de alta calidad.',
    price: 2.99,
    slots: 5,
    category: Category.MUSIC,
    logoColor: 'bg-green-500',
    icon: 'S'
  },
  {
    id: '3',
    name: 'Disney+ Premium',
    description: 'Las mejores historias de Disney, Pixar, Marvel, Star Wars y más.',
    price: 3.50,
    slots: 4,
    category: Category.VIDEO,
    logoColor: 'bg-blue-900',
    icon: 'D'
  },
  {
    id: '4',
    name: 'YouTube Premium',
    description: 'YouTube y YouTube Music sin anuncios, en segundo plano.',
    price: 3.20,
    slots: 5,
    category: Category.VIDEO,
    logoColor: 'bg-red-500',
    icon: 'Y'
  },
  {
    id: '5',
    name: 'HBO Max',
    description: 'Todo HBO junto con las mejores series de TV, películas y originales.',
    price: 4.00,
    slots: 3,
    category: Category.VIDEO,
    logoColor: 'bg-purple-700',
    icon: 'H'
  },
  {
    id: '6',
    name: 'NordVPN',
    description: 'Navega seguro y privado. Desbloquea contenido global.',
    price: 2.00,
    slots: 6,
    category: Category.VPN,
    logoColor: 'bg-blue-600',
    icon: 'V'
  },
  {
    id: '7',
    name: 'Nintendo Switch Online',
    description: 'Juego en línea, almacenamiento en la nube y juegos clásicos.',
    price: 1.50,
    slots: 8,
    category: Category.GAMES,
    logoColor: 'bg-red-500',
    icon: 'NS'
  },
  {
    id: '8',
    name: 'Duolingo Plus',
    description: 'Aprende idiomas sin anuncios y con vidas ilimitadas.',
    price: 1.99,
    slots: 5,
    category: Category.EDUCATION,
    logoColor: 'bg-green-400',
    icon: 'L'
  },
   {
    id: '9',
    name: 'Prime Video',
    description: 'Series Amazon Originals exclusivas, además de películas y series populares.',
    price: 3.00,
    slots: 3,
    category: Category.VIDEO,
    logoColor: 'bg-blue-400',
    icon: 'P'
  },
  {
    id: '10',
    name: 'Apple Music',
    description: '90 millones de canciones sin anuncios en audio espacial.',
    price: 3.00,
    slots: 5,
    category: Category.MUSIC,
    logoColor: 'bg-pink-500',
    icon: 'A'
  }
];

export const CATEGORIES = Object.values(Category);