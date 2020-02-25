import React, { useEffect } from 'react';
import MuiDataTable from 'mui-datatables';

const DataTable = ({ data, columns, options, title }) => {
  useEffect(() => {
    console.log('render table');
  }, []);
  return (
    <MuiDataTable
      title={title}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default DataTable;
