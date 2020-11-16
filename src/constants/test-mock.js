const MOCK_PRODUCT_LIST = [
  {
    id:1,
    name:"Beef - Tongue, Fresh",
    price: 6.14,
    department:"Food",
    currency: '$'
 },
 {
    id:2,
    name:"IPhone X",
    price:900.13,
    department:"Electronics",
    currency: '$'
 },
 {
    id:3,
    name:"Gibson Les Paul",
    price:900.67,
    department:"Music",
    currency: '$'
 }
];

const MOCK_FILTER_INVALID_VALUES = [
  {
    priceFrom: 'abc',
    priceTo: '123',
    length: 0
  },
  {
    priceFrom: '123',
    priceTo: 'abc',
    length: 0
  },
  {
    priceFrom: 'abc',
    priceTo: 'abc',
    length: 0
  },
  {
    priceFrom: 'abc123',
    priceTo: 'abc123',
    length: 0
  }
];

const MOCK_COLUMNS = {
  id: true,
  name: true,
  department: true,
  currency: true,
  price: true
};

const MOCK_COLUMNS_LIST = [
  {
    id: true,
    name: true,
    department: true,
    currency: true,
    price: true
  },
  {
    id: false,
    name: true,
    department: false,
    currency: true,
    price: true
  },
  {
    id: true,
    name: false,
    department: false,
    currency: true,
    price: false
  },
  {
    id: false,
    name: false,
    department: false,
    currency: false,
    price: false
  }
]

export {
  MOCK_PRODUCT_LIST,
  MOCK_FILTER_INVALID_VALUES,
  MOCK_COLUMNS,
  MOCK_COLUMNS_LIST
};