export interface CategoryTypes {
    _id: string;
    name: string;
    __v: number;
}

export interface Nominal {
    _id: string;
    coinQuantity: number;
    price: number;
    coinName: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface User {
    _id: string;
    phoneNumber: string;
    name: string;
}

export interface Bank {
    _id: string;
    name: string;
    noRekening: string;
    bankName: string;
    __v: number;
}

export interface Payment {
    _id: string;
    banks: Bank[];
    type: string;
    status: string;
    __v: number;
}

export interface GameItemTypes {
  _id: string;
  name: string;
  status: string;
  thumbnail: string;
  category: CategoryTypes;
}

export interface DetailVoucherTypes {
    _id: string;
    name: string;
    category: CategoryTypes;
    isFeatured: boolean;
    status: string;
    thumbnail: string;
    user: User;
    nominals: Nominal[];
    __v: number;
}

export interface DataDetailVoucherTypes {
    detail: DetailVoucherTypes;
    payment: Payment[];
}
