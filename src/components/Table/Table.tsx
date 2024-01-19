import React, {useEffect} from 'react';
import paginationFactory, {PaginationListStandalone, PaginationProvider} from "react-bootstrap-table2-paginator";
import BootstrapTable, {PaginationOptions} from "react-bootstrap-table-next";
import filterFactory from "react-bootstrap-table2-filter";
import {IAccount, ICampaign, IProfile} from "../../models/interfaces";

interface ITableProps {
    data: (IAccount | IProfile | ICampaign)[];
    columns: any[];
    previous?: string | null;
}

const Table: React.FC<ITableProps> = ({data, columns, previous = null}) => {

    const paginationOptions: PaginationOptions = {
        custom: true,
        totalSize: data.length,
    };

    useEffect(() => {
        const myList = document.querySelector('.pagination');
        const liElements = myList && myList.getElementsByTagName('li');
        if (myList && liElements && liElements.length === 1) {
            // @ts-ignore
            myList.style.display = 'none';
        } else {
            // @ts-ignore
            myList.style.display = 'flex';
        }
    }, []);

    return (
        <PaginationProvider
            pagination={paginationFactory(paginationOptions)}
        >
            {({
                  paginationProps,
                  paginationTableProps,
              }) => (
                <div>
                    {previous && (
                        <p className='go-to-back' onClick={() => window.history.back()}>&larr; {previous}</p>
                    )}

                    <BootstrapTable
                        // @ts-ignore
                        keyField="id"
                        // @ts-ignore
                        data={data}
                        // @ts-ignore
                        columns={columns}
                        striped
                        hover
                        condensed
                        filter={filterFactory()}
                        wrapperClasses="table-responsive"
                        rowClasses="custom-row-class"
                        headerClasses="custom-header-class"
                        {...paginationTableProps}
                    />
                    <PaginationListStandalone {...paginationProps} />
                </div>
            )}
        </PaginationProvider>
    );
};

export default Table;