export interface Show {
    id?: number; // L'identifiant est optionnel car il est généré par le serveur
    title: string; // Le titre de la série
    description: string; // Une description de la série
    episodes: number; // Le nombre d'épisodes
  }
  