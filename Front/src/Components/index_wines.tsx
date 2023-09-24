export interface Wine {
    id: number;
    name: string;
  }

  export interface ViewWinesCommand {
    price_range?: {
      min: number;
      max: number;
    };
    sort_by_best_average_rating?: boolean;
  }
  
  export default Wine;
