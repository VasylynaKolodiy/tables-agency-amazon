import React from 'react';
import {IProfile} from "../../models/interfaces";
import {profilesData} from "../../constants/data";
import {textFilter} from "react-bootstrap-table2-filter";
import Table from "../../components/Table/Table";

const Profiles: React.FC = () => {

    const pathSegments = window.location.pathname.split('/');
    const idAccount: number = +pathSegments[pathSegments.length - 1];
    let data: IProfile[] = profilesData[idAccount];

    const columns = [
        {
            dataField: 'profileId',
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
            // @ts-ignore
            formatter: (cell) => <a href={`/campaigns/${cell}`}><p className="first-column">{cell}</p></a>
        },
        {
            dataField: 'country',
            text: 'Country',
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
                placeholder: 'Filter by country',
            }),
        },
        {
            dataField: 'marketplace',
            text: 'Marketplace',
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
                placeholder: 'Filter by marketplace',
            }),
        },
    ];

    return (
        <div className="profiles container">
            <h1>Profiles</h1>
            <Table data={data} columns={columns} previous={'Accounts'}/>
        </div>
    );
};

export default Profiles;