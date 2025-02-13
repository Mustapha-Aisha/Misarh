// export enum ScentType {
//     BASE = 'base',   
//     TOP = 'top',    
//     MIDDLE = 'middle', 
//     EXOTIC = 'exotic', 
//   }

export enum Variation {
  "15ml" = "15ml",
  "20ml" = "20ml",
  "30ml" = "30ml",
  "50ml" = "50ml",
  "100ml" = "100ml"
}

export enum Category {
  SUBLIME = 'SUBLIME',
  PRESTIGE = 'PRESTIGE',
  IMPERIAL = 'IMPERIAL',
  DEFAULT = 'DEFAULT'
}

export interface MixDetails {
  basePerfumes: { name: string; percentage: number }[];
  designerOils: { name: string; percentage: number }[];
  customBlendRatio: string;
}

export interface ProductEntity {
  id: string;
  name: string;
  price: string;
  scentDescription: string;
  image_url: string;
  categoryId: Category;
  customerId: string;
  discount?: string;
  notes?: string;
  variation: Variation;
  scentNotes: {
    Top: string;
    Middle: string;
    Base: string;
  };
  otherCombinations: string[];
  scentStory: string[];
}

export interface CartItem {
  id: string;
  cart: string;
  // price: number;
  quantity: number;
  product: ProductEntity;
}

export interface APIResponse {
  status: boolean,
  status_code: number,
  message: string,
  data: any
}



/*
- Single responsibility principle
- Open Close 
- Liskov Substitution
- Interface segregation
- Dependency injection
*/