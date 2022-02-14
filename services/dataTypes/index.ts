export interface CategoryTypes {
  _id: string,
  name: string,
}

export interface ThumbnailTypes {
  url: string,
  secure_url: string
}

export interface GameItemTypes {
  _id: string,
  status: boolean,
  name: string,
  slug: string,
  thumbnail: ThumbnailTypes,
  category: CategoryTypes,
}

export interface UserTypes {
  id: string,
  name: string,
  username: string,
  phoneNumber: string,
  avatar: {
    secure_url: string,
  },
  email: string,
}

export interface BankTypes {
  _id: string,
  name: string,
  bankName: string,
  bankAccountNumber: string
}

export interface PaymentTypes {
  _id: string;
  type: string;
  banks: Array<BankTypes>;
}

export interface NominalTypes {
  _id: string;
  coinName: string;
  coinQuantity: number;
  price: number;
}

export interface CheckoutTypes {
  name: string,
  voucherId: string,
  verifyId: string,
  paymentId: string,
  bankId: string,
}
