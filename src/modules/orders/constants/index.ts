import foodImage01 from '../../../assets/images/orders/food-01.png';
import foodImage02 from '../../../assets/images/orders/food-02.png';
import foodImage03 from '../../../assets/images/orders/food-03.png';
import foodImage04 from '../../../assets/images/orders/food-04.png';

export const CATEGORIES_ORDER_DATA = [
  { key: 'all', label: 'Tất cả' },
  { key: 'snack', label: 'Đồ nhậu' },
  { key: 'hotpot', label: 'Lẩu' },
  { key: 'grill', label: 'Đồ nướng' },
  { key: 'drink', label: 'Đồ uống' },
];

export const MENU_DATA = [
  {
    id: 1,
    name: 'Salad Tuna',
    categoryKey: 'snack',
    prices: {
      VND: 250000,
      GNF: 500.67,
    },
    image: foodImage01,
    description: '(Must choose level)',
  },
  {
    id: 2,
    name: 'Salad Egg',
    categoryKey: 'snack',
    prices: {
      VND: 150000,
      GNF: 300.99,
    },
    image: foodImage02,
    description: '',
  },
  {
    id: 3,
    name: 'Wagyu Sate',
    categoryKey: 'grill',
    prices: {
      VND: 135000,
      GNF: 270.32,
    },
    image: foodImage03,
    description: '',
  },
  {
    id: 4,
    name: 'Wagyu Black Paper',
    categoryKey: 'grill',
    prices: {
      VND: 175000,
      GNF: 34.98,
    },
    image: foodImage04,
    description: '(Must choose level)',
  },
  {
    id: 5,
    name: 'Octopus Snack',
    categoryKey: 'snack',
    prices: { VND: 190000, GNF: 420.45 },
    image: foodImage02,
    description: '',
  },
  {
    id: 6,
    name: 'Seafood Hotpot',
    categoryKey: 'hotpot',
    prices: { VND: 320000, GNF: 640.12 },
    image: foodImage02,
    description: '(Spicy level optional)',
  },
  {
    id: 7,
    name: 'Beef Hotpot',
    categoryKey: 'hotpot',
    prices: { VND: 295000, GNF: 590.0 },
    image: foodImage02,
    description: '',
  },
  {
    id: 8,
    name: 'Grilled Shrimp',
    categoryKey: 'grill',
    prices: { VND: 210000, GNF: 410.2 },
    image: foodImage02,
    description: '',
  },
  {
    id: 9,
    name: 'Mojito',
    categoryKey: 'drink',
    prices: { VND: 85000, GNF: 170.55 },
    image: foodImage02,
    description: '',
  },
];

export const FLOOR_DATA = [
  { value: '1', label: 'Tầng 1' },
  { value: '2', label: 'Tầng 2' },
  { value: '3', label: 'Tầng 3' },
];

export const TABLE_DATA = [
  { id: 'B1', floor: '1', status: 'empty' },
  { id: 'B2', floor: '1', status: 'in_use' },
  { id: 'B3', floor: '1', status: 'booked' },
  { id: 'B4', floor: '1', status: 'in_use' },
  { id: 'B1', floor: '2', status: 'empty' },
  { id: 'B2', floor: '2', status: 'in_use' },
  { id: 'B3', floor: '2', status: 'booked' },
  { id: 'B4', floor: '2', status: 'empty' },
  { id: 'B1', floor: '3', status: 'booked' },
  { id: 'B5', floor: '1', status: 'in_use' },
  { id: 'B6', floor: '1', status: 'booked' },
  { id: 'B7', floor: '1', status: 'in_use' },
  { id: 'B8', floor: '1', status: 'empty' },
  { id: 'B9', floor: '1', status: 'booked' },
  { id: 'B10', floor: '1', status: 'empty' },
  { id: 'B11', floor: '1', status: 'in_use' },
  { id: 'B12', floor: '1', status: 'empty' },
];

export const CURRENT_ORDER_STATE = {
  orderInfo: {
    creationDate: '19/08/2025',
    creationTime: '20:08:45',
    customer: 'Lê Thị C',
    employee: 'Trần Văn B',
    table: 'B1 (Tầng 2)',
  },

  items: [
    {
      productId: 1,
      name: 'Salad Tuna',
      quantity: 2,
      pricePerUnit: 200.0,
      total: 400.0,
      image: foodImage01,
    },
    {
      productId: 4,
      name: 'Wagyu Black Paper',
      quantity: 1,
      pricePerUnit: 200.0,
      total: 200.0,
      image: foodImage04,
    },
    {
      productId: 2,
      name: 'Salad Egg',
      quantity: 1,
      pricePerUnit: 200.0,
      total: 200.0,
      image: foodImage02,
    },
  ],

  payment: {
    subTotal: 800.0,
    discountCode: 'XYZ6H',
    discountAmount: 30.0,
    total: 770.0,
    paymentStatus: 'chưa thanh toán',
  },
};
