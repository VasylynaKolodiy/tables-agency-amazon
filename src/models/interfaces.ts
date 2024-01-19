export interface IAccount {
  accountId: number;
  email: string;
  authToken: string;
  creationDate: string;
}

export interface IProfile {
  profileId: number;
  country: string;
  marketplace: string;
}

export interface IProfiles {
  [key: number]: IProfile[]
}

export interface ICampaign {
  campaignId: string;
  clicks: number;
  cost: number;
  date: string;
}

export interface ICampaigns {
  [key: number]: ICampaign[]
}

