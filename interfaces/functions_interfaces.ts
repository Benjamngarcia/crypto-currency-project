export interface GetAllCoinsMarketsOptions {
  vsCurrency: string;
  ids?: string;
  order?: string;
  perPage?: number;
  page: number;
  sparkline?: boolean;
  priceChangePercentage?: string;
  locale?: string;
}

export interface InfoRequestContext {
  infoRequestAllMarket: GetAllCoinsMarketsOptions;
  incrementPage: (page:number) => void;
  decrementPage: (page:number) => void;
  changePage: (page: number) => void;
}

export interface GetCoinDetailsOptions {
  id: string;
} 