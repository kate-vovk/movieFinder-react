import { DataStatus } from './status';

export interface IMyMovies {
  myMovies: IOrder[];
  status: DataStatus;
}

export interface IOrder {
  id: string;
  title: string;
  description: string;
  coverUrl: string;
  genre: string;
  duration: number;
  releaseDate: string;
  productionCompany: string;
  filmPrice: string;
  cast: string;
  producer: string;
  category: string;
  country: string;
  trailerUrl: string;
  orderId: string;
  orderPrice: string;
  qualityId: number;
  period: number;
  isActive: boolean;
  orderDate: string;
  expireDate: string;
}

export type TOrders = Pick<
  IOrder,
  | 'id'
  | 'coverUrl'
  | 'title'
  | 'releaseDate'
  | 'filmPrice'
  | 'orderDate'
  | 'orderPrice'
  | 'isActive'
>;
export interface IOrders {
  ordersId: string;
  ordersDataList: TOrders[];
}
