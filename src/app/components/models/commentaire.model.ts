export interface Commentaire {
  id: number;
  commentaire: string;
  planteId: number;
  utilisateurId: number;
  date: string | null;
}
