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

export interface ICampaign {
  campaignId: number;
  clicks: number;
  cost: number;
  date: string;
}

