export interface Solution {
  name: string
  icon: string
  description: string | null
  description_short: string
  label: string
  url: string
}

export interface Solutions {
  [product: string]: Solution
}

const solutions: Solutions = {
  database: {
    name: 'Database',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
    description:
      "Every project is a full Postgres database, the world's most trusted relational database.",
    description_short: '',
    label: '',
    url: '/database',
  },
  authentication: {
    name: 'Authentication',
    icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
    description: 'Add user sign ups and logins, securing your data with Row Level Security.',
    description_short: '',
    label: '',
    url: '/auth',
  },
  storage: {
    name: 'Storage',
    icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4',
    description: 'Store, organize, and serve large files. Any media, including videos and images.',
    description_short: '',
    label: '',
    url: '/storage',
  },
  'edge-functions': {
    name: 'Edge Functions',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    description: 'Write custom code without deploying or scaling servers.',
    description_short: '',
    label: '',
    url: '/edge-functions',
  },
  realtime: {
    name: 'Realtime',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    description:
      'Create multiplayer experiences by sharing, broadcasting, and listening to changes from other clients or the Database.',
    description_short: '',
    label: '',
    url: '/realtime',
  },
  vector: {
    name: 'Vector',
    icon: 'M11.9983 11.4482V21.7337M11.9983 11.4482L21.0732 6.17699M11.9983 11.4482L2.92383 6.17723M2.92383 6.17723V12.4849M2.92383 6.17723V6.1232L8.35978 2.9657M21.0736 12.54V6.1232L15.6376 2.9657M17.7247 18.6107L11.9987 21.9367L6.27265 18.6107',
    description: 'Integrate your favorite ML-models to store, index and search vector embeddings.',
    description_short: '',
    label: '',
    url: '/vector',
  },
}

export default solutions
