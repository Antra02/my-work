// chung@walmartlabs.com
import ReactTable from 'react-table';

var reactTable = require("react-table").default;

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
        ItemID:"Item ID",
        ProductName:"Product Name",
        UnitPrice:"Unit Price",
        TowDayShipping="2-DAY SHIPPING"
    }
];

<reactTable response={response} columns={columns} />
}