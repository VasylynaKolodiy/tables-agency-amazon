import React from 'react';
import {IAccount} from "../../models/interfaces";
import {accountsData} from "../../constants/data";
import {textFilter} from "react-bootstrap-table2-filter";
import Table from "../../components/Table/Table";

const Accounts: React.FC = () => {
    const data: IAccount[] = accountsData;

    const columns = [
        {
            dataField: 'accountId',
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
            formatter: (cell) => <a href={`/profiles/${cell}`}><p className="first-column">{cell}</p></a>
        },
        {
            dataField: 'email',
            text: 'Email',
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
                placeholder: 'Filter by email',
            }),
        },
        {
            dataField: 'authToken',
            text: 'Token',
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
                placeholder: 'Filter by token',
            }),
        },
        {
            dataField: 'creationDate',
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
        <div className="accounts container">
            <h1>Accounts</h1>
            <Table data={data} columns={columns}/>
        </div>
    );
};

export default Accounts;