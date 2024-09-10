export type ProjectWithMetrics = {
  id: string;
  name: string;
  status: string;
  profile?: {
    name: string;
    profileImageUrl: string;
    bannerImageUrl: string;
  };
  metadata: {
    name: string;
    bio: string;
    websiteUrl: string;
    contributionLinks: ContributionLink[];
    sunnyAwards: {
      projectType: string;
      category: string;
      categoryDetails: string;
      contracts: Contract[];
      mintingWalletAddress: string;
      projectReferences: ProjectReferences;
      avatarUrl: string;
      coverImageUrl: string;
    };
  };
  metrics?: Metrics;
  nextPage: number;
};

type ContributionLink = {
  description: string;
  type: string;
  url: string;
};

type Contract = {
  chainId: number;
  address: string;
};

type ProjectReferences = {
  charmverseId: string;
  agoraProjectRefUID: string;
};

export type Metrics = { [key: string]: number };

export type ProjectWithRank = ProjectWithMetrics & {
  rank: number;
  nextPage: number;
};

export type ProjectsApiResponse = {
  result: {
    data: {
      json: ProjectWithMetrics[];
    };
  };
};
