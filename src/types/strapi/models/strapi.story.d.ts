type StrapiStoryBaseModel = StrapiBaseModel & StrapiStory;

type StrapiStory = {
  documentId: string;
  title: string;
  description: string;
  thumbnail: StrapiMedia;
};
