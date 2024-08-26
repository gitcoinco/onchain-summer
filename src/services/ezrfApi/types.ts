export type Project = {
  id: string;
  name: string;
  status: string;
  profile: {
    name: string;
    profileImageUrl: string;
    bannerImageUrl: string;
  };
  metadata: {
    name: string;
    bio: string;
    websiteUrl: string;
  };
};

export type Metrics = { [key: string]: number };

export type ProjectWithMetrics = Project & {
  metrics: Metrics;
  rank: number;
};

export type ProjectsApiResponse = {
  result: {
    data: {
      json: Project[];
    };
  };
};

export type MetricsApiResponse = {
  result: {
    data: {
      json: {
        [key: string]: Metrics;
      };
    };
  };
};
