export type IProduct = {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  location: string;
  image: string;

  isPremium: boolean;
  isApproved: boolean;

  userId: string;
  categoryId: string;
};
