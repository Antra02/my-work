// chung@walmartlabs.com
import ReactTable from 'react-table';
import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table'
 

class Table1 extends Component {
  render() {
    const response = [
        {
            productName: "Nabisco Ritz Peanut Butter Cracker Sandwiches, 1.38 oz, 8 pack",
            "unitPrice": 2.78,
            twoDayShipping: true,
            id: "10448059",
        },
        {
            productName: "Photive CYREN II Portable Waterproof Bluetooth Speaker. Rugged Shockproof Dustproof Water-Resistant Wireless Portable Bluetooth Speaker",
            twoDayShipping: false,
            id: "10448059",
        },
        {
            productName: "Super Nintendo Entertainment System: Super NES Classic Edition",
            "unitPrice": 118.82,
            twoDayShipping: false,
            id: "10448059",
            extra: "abc"
        }
    ];

    const columns = [{
        Header:"Item ID",
        accessor: 'id'
    }, {
        Header:"Product Name", 
        accessor: 'productName'
    }, {
        Header:'Unit Price', 
        accessor: 'unitPrice'
    }, {
        Header: '2-Day SHIPPING',
        accessor: 'twoDayShipping'
    }];
  }

ReactDOM.render(
  <Table1 data={response}, columns={columns}/>,
  document.getElementById("root")
);
}

class Table2 extends Component {
  render() {
    const response = [
        {
            productName: "Spring Valley Melatonin Tablets, 10 mg, 120 Ct",
            "unitPrice": 6.88,
            additionalProductDetails: "Model Number: 2M076/S02282G",
            id: "50733191",
            backOrder: ""
        },
        {
            productName: "Spring Valley Vitamin C Tablets, 500 mg, 100 Ct",
            "unitPrice": 2.74,
            additionalProductDetails: "Model Number: 3770",
            id: "893220",
            backOrder: ""
        }
    ];

    const columns = [{
        Header:"Item ID",
        accessor: 'id'
    }, {
        Header:"Product Name", 
        accessor: 'productName'
    }, {
        Header:'Unit Price', 
        accessor: 'unitPrice'
    }, {
        Header: 'Additional Product Details',
        accessor: 'additionalProductDetails'
    }, {
        Header: 'Bachorder',
        accessor: 'backOrder'
    }
    ];
  }
  ReactDOM.render(
  <Table2 data={response}, columns={columns}/>,
  document.getElementById("root")
);
}

/*<ReactTable response={response} columns={columns} />*/
export default Table1;
export default Table2;

