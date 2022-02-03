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
