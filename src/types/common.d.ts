type StrapiBaseResponse<T> = {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

type StrapiMediaFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  path: string;
  url: string;
};

type StrapiBaseModel = {
  id: number;
  // createdAt: Date;
  // updatedAt: Date;
  // publishedAt?: Date;
};

type StrapiMedia = {
  id: number;
  alternativeText: string | null;
  caption: string | null;
  ext: string | '.png' | '.jpg' | '.jpeg';
  width: number;
  height: number;
  mime: string;
  name: string;
  previewUrl: string;
  provider: string;
  providerMetadata: null;
  formats: {
    thumbnail: StrapiMediaFormat;
    small: StrapiMediaFormat;
    medium: StrapiMediaFormat;
    large: StrapiMediaFormat;
  };
  size: number;
  url: string;
};
