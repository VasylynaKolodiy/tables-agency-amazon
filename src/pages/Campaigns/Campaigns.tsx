import React from 'react';
import {ICampaign} from "../../models/interfaces";
import {campaignsData} from "../../constants/data";
import {textFilter} from "react-bootstrap-table2-filter";
import Table from "../../components/Table/Table";

const Campaigns: React.FC = () => {

    const pathSegments = window.location.pathname.split('/');
    const idProfile: number = +pathSegments[pathSegments.length - 1];
    let data: ICampaign[] = campaignsData[idProfile];

    const columns = [
        {
            dataField: 'campaignId',
            text: 'ID',
            sort: true,
            sortCaret: (order: string) => {
                if (!order) return <span className='sortCaret'>&uarr;&darr;</span>;
                return order === 'asc' ? (
                    <span className='sortCaret'>&uarr;</span>
                ) : (
                    <span className='sortCaret'>&darr;</span>
                );
            },
        },
        {
            dataField: 'clicks',
            text: 'Clicks',
            sort: true,
            sortCaret: (order: string) => {
                if (!order) return <span className='sortCaret'>&uarr;&darr;</span>;
                return order === 'asc' ? (
                    <span className='sortCaret'>&uarr;</span>
                ) : (
                    <span className='sortCaret'>&darr;</span>
                );
            },
            filter: textFilter({
                placeholder: 'Filter by clicks',
            }),
        },
        {
            dataField: 'cost',
            text: 'Cost',
            sort: true,
            sortCaret: (order: string) => {
                if (!order) return <span className='sortCaret'>&uarr;&darr;</span>;
                return order === 'asc' ? (
                    <span className='sortCaret'>&uarr;</span>
                ) : (
                    <span className='sortCaret'>&darr;</span>
                );
            },
            filter: textFilter({
                placeholder: 'Filter by cost',
            }),
        },
        {
            dataField: 'date',
            text: 'Date',
            sort: true,
            sortCaret: (order: string) => {
                if (!order) return <span className='sortCaret'>&uarr;&darr;</span>;
                return order === 'asc' ? (
                    <span className='sortCaret'>&uarr;</span>
                ) : (
                    <span className='sortCaret'>&darr;</span>
                );
            },
            filter: textFilter({
                placeholder: 'Filter by date',
            }),
        },
    ];

    return (
        <div className="campaigns container">
            <h1>Campaigns</h1>
            <Table data={data} columns={columns} previous={'Profiles'}/>
        </div>
    );
};

export default Campaigns;