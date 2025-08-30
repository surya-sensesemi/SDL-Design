export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  packages: Package[];
  gallery: string[];
}

export interface Package {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export interface Photo {
  id: string;
  url: string;
  category: string;
  title: string;
  description?: string;
  likes: number;
  timestamp: Date;
}

export interface LiveEvent {
  id: string;
  title: string;
  date: string;
  qrCode: string;
  photos: Photo[];
  isActive: boolean;
  password?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  albums: Album[];
  payments: Payment[];
}

export interface Album {
  id: string;
  title: string;
  photos: Photo[];
  isPrivate: boolean;
  downloadEnabled: boolean;
}

export interface Payment {
  id: string;
  amount: number;
  date: string;
  description: string;
  status: 'paid' | 'pending' | 'overdue';
}