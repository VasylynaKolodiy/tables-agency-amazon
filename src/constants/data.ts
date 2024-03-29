import {IAccount, ICampaigns, IProfiles} from "../models/interfaces";
// @ts-ignore
import {v4 as uuid} from 'uuid';

export const accountsData: IAccount[] = [
    {
        accountId: 1,
        email: 'amazon@example.com',
        authToken: 'token1',
        creationDate: '2024-01-01',
    },
    {
        accountId: 2,
        email: 'ebay@example.com',
        authToken: 'token2',
        creationDate: '2024-01-02',
    },
    {
        accountId: 3,
        email: 'google@example.com',
        authToken: 'token3',
        creationDate: '2024-01-03',
    },
    {
        accountId: 4,
        email: 'paypal@example.com',
        authToken: 'token4',
        creationDate: '2024-01-04',
    },
    {
        accountId: 5,
        email: 'shopify@example.com',
        authToken: 'token5',
        creationDate: '2024-01-05',
    },
    {
        accountId: 6,
        email: 'facebook@example.com',
        authToken: 'token6',
        creationDate: '2024-01-06',
    },
    {
        accountId: 7,
        email: 'microsoft@example.com',
        authToken: 'token7',
        creationDate: '2024-01-07',
    },
    {
        accountId: 8,
        email: 'netflix@example.com',
        authToken: 'token8',
        creationDate: '2024-01-08',
    },
    {
        accountId: 9,
        email: 'twitter@example.com',
        authToken: 'token9',
        creationDate: '2024-01-09',
    },
    {
        accountId: 10,
        email: 'linkedin@example.com',
        authToken: 'token10',
        creationDate: '2024-01-10',
    },
    {
        accountId: 11,
        email: 'zalando@example.com',
        authToken: 'token11',
        creationDate: '2024-01-11',
    },
    {
        accountId: 12,
        email: 'cdiscount@example.com',
        authToken: 'token12',
        creationDate: '2024-01-12',
    },
    {
        accountId: 13,
        email: 'alibaba@example.com',
        authToken: 'token13',
        creationDate: '2024-01-13',
    },
    {
        accountId: 14,
        email: 'kogan@example.com',
        authToken: 'token14',
        creationDate: '2024-01-14',
    },
    {
        accountId: 15,
        email: 'rakuten@example.com',
        authToken: 'token15',
        creationDate: '2024-01-15',
    },
    {
        accountId: 16,
        email: 'flipkart@example.com',
        authToken: 'token16',
        creationDate: '2024-01-16',
    },
    {
        accountId: 17,
        email: 'mercado.livre@example.com',
        authToken: 'token17',
        creationDate: '2024-01-17',
    },
];


export const profilesData: IProfiles = {
    1: [
        {
            profileId: 201,
            country: 'USA',
            marketplace: 'Amazon',
        },
        {
            profileId: 202,
            country: 'USA',
            marketplace: 'Amazon',
        },
        {
            profileId: 203,
            country: 'USA',
            marketplace: 'Amazon',
        },
    ],
    2: [
        {
            profileId: 204,
            country: 'UK',
            marketplace: 'eBay',
        },
        {
            profileId: 205,
            country: 'UK',
            marketplace: 'eBay',
        },
    ],
    3: [
        {
            profileId: 206,
            country: 'USA',
            marketplace: 'Google Store',
        },
        {
            profileId: 207,
            country: 'USA',
            marketplace: 'Google Store',
        },
        {
            profileId: 208,
            country: 'USA',
            marketplace: 'Google Store',
        },
        {
            profileId: 209,
            country: 'USA',
            marketplace: 'Google Store',
        }
    ],
    4: [
        {
            profileId: 210,
            country: 'Germany',
            marketplace: 'Paypal',
        },
        {
            profileId: 211,
            country: 'Germany',
            marketplace: 'Paypal',
        },
    ],
    5: [
        {
            profileId: 212,
            country: 'Canada',
            marketplace: 'Shopify',
        },
        {
            profileId: 213,
            country: 'Canada',
            marketplace: 'Shopify',
        },
        {
            profileId: 214,
            country: 'Canada',
            marketplace: 'Shopify',
        },
    ],
    6: [
        {
            profileId: 215,
            country: 'USA',
            marketplace: 'Facebook Marketplace',
        },
        {
            profileId: 216,
            country: 'USA',
            marketplace: 'Facebook Marketplace',
        },
        {
            profileId: 217,
            country: 'USA',
            marketplace: 'Facebook Marketplace',
        },
        {
            profileId: 218,
            country: 'USA',
            marketplace: 'Facebook Marketplace',
        },
        {
            profileId: 219,
            country: 'USA',
            marketplace: 'Facebook Marketplace',
        },
    ],
    7: [
        {
            profileId: 220,
            country: 'USA',
            marketplace: 'Microsoft Store',
        },
        {
            profileId: 221,
            country: 'USA',
            marketplace: 'Microsoft Store',
        },
    ],
    8: [
        {
            profileId: 222,
            country: 'USA',
            marketplace: 'Netflix',
        },
        {
            profileId: 223,
            country: 'USA',
            marketplace: 'Netflix',
        },
        {
            profileId: 224,
            country: 'USA',
            marketplace: 'Netflix',
        },
    ],
    9: [
        {
            profileId: 225,
            country: 'USA',
            marketplace: 'Twitter',
        },
        {
            profileId: 226,
            country: 'USA',
            marketplace: 'Twitter',
        },
    ],
    10: [
        {
            profileId: 227,
            country: 'USA',
            marketplace: 'LinkedIn',
        },
        {
            profileId: 228,
            country: 'USA',
            marketplace: 'LinkedIn',
        },
        {
            profileId: 229,
            country: 'USA',
            marketplace: 'LinkedIn',
        },
        {
            profileId: 230,
            country: 'USA',
            marketplace: 'LinkedIn',
        },
    ],
    11: [
        {
            profileId: 231,
            country: 'Germany',
            marketplace: 'Zalando',
        },
        {
            profileId: 232,
            country: 'Germany',
            marketplace: 'Zalando',
        },
    ],
    12: [
        {
            profileId: 233,
            country: 'France',
            marketplace: 'Cdiscount',
        },
        {
            profileId: 234,
            country: 'France',
            marketplace: 'Cdiscount',
        },
    ],
    13: [
        {
            profileId: 235,
            country: 'China',
            marketplace: 'Alibaba',
        },
        {
            profileId: 236,
            country: 'China',
            marketplace: 'Alibaba',
        },
        {
            profileId: 237,
            country: 'China',
            marketplace: 'Alibaba',
        },
        {
            profileId: 238,
            country: 'China',
            marketplace: 'Alibaba',
        },
    ],
    14: [
        {
            profileId: 239,
            country: 'Australia',
            marketplace: 'Kogan',
        },
        {
            profileId: 240,
            country: 'Australia',
            marketplace: 'Kogan',
        },
    ],
    15: [
        {
            profileId: 241,
            country: 'Japan',
            marketplace: 'Rakuten',
        },
        {
            profileId: 242,
            country: 'Japan',
            marketplace: 'Rakuten',
        },
        {
            profileId: 243,
            country: 'Japan',
            marketplace: 'Rakuten',
        },
        {
            profileId: 244,
            country: 'Japan',
            marketplace: 'Rakuten',
        },
        {
            profileId: 245,
            country: 'Japan',
            marketplace: 'Rakuten',
        },
    ],
    16: [
        {
            profileId: 246,
            country: 'India',
            marketplace: 'Flipkart',
        },
        {
            profileId: 247,
            country: 'India',
            marketplace: 'Flipkart',
        },
    ],
    17: [
        {
            profileId: 248,
            country: 'Brazil',
            marketplace: 'Mercado Livre',
        },
        {
            profileId: 249,
            country: 'Brazil',
            marketplace: 'Mercado Livre',
        },
    ],
}

export const campaignsData: ICampaigns = {
    201: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    202: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    203: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    204: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    205: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    206: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    207: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    208: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    209: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    210: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    211: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    212: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    213: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    214: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    215: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    216: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    217: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    218: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    219: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    220: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    221: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    222: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    223: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    224: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    225: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    226: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    227: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    228: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    229: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    230: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    231: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},

    ],
    232: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    233: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    234: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    235: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    236: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    237: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    238: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    239: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    240: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    241: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    242: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    243: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    244: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    245: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    246: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    247: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    248: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
    249: [
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 50.75, date: '2024-01-01'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-02'},
        {campaignId: uuid(), clicks: Math.floor(Math.random() * 100), cost: 80.20, date: '2024-01-03'},
    ],
}

