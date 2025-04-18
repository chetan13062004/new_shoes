
import { IProductInput, IUserInput } from '@/types'
import { toSlug } from './utils'
import bcrypt from 'bcryptjs'

const users: IUserInput[] = [
  {
    name: 'John',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'Admin',
    address: {
      fullName: 'John Doe',
      street: '111 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jane Harris',
      street: '222 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1002',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Jack',
    email: 'jack@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jack Ryan',
      street: '333 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1003',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Sarah',
    email: 'sarah@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Sarah Smith',
      street: '444 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1005',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Michael',
    email: 'michael@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'John Alexander',
      street: '555 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '1006',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Emily',
    email: 'emily@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Emily Johnson',
      street: '666 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10001',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Alice',
    email: 'alice@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Alice Cooper',
      street: '777 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10007',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Tom',
    email: 'tom@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Tom Hanks',
      street: '888 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10008',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Linda',
    email: 'linda@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Linda Holmes',
      street: '999 Main St',
      city: 'New York',
      province: 'NY',
      postalCode: '10009',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'George',
    email: 'george@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'George Smith',
      street: '101 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10010',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'Jessica',
    email: 'jessica@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Jessica Brown',
      street: '102 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10011',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Chris',
    email: 'chris@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Chris Evans',
      street: '103 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10012',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
  {
    name: 'Samantha',
    email: 'samantha@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Samantha Wilson',
      street: '104 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10013',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Stripe',
    emailVerified: false,
  },
  {
    name: 'David',
    email: 'david@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'David Lee',
      street: '105 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10014',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'Cash On Delivery',
    emailVerified: false,
  },
  {
    name: 'Anna',
    email: 'anna@example.com',
    password: bcrypt.hashSync('123456', 5),
    role: 'User',
    address: {
      fullName: 'Anna Smith',
      street: '106 First Ave',
      city: 'New York',
      province: 'NY',
      postalCode: '10015',
      country: 'USA',
      phone: '123-456-7890',
    },
    paymentMethod: 'PayPal',
    emailVerified: false,
  },
]

const products: IProductInput[] = [
  {
    name: 'Nike Air Max Running Shoes',
    slug: toSlug('Nike Air Max Running Shoes'),
    category: 'Shoes',
    images: ['/image/one-black-sneaker.jpg', '/image/1.2.jpg'], // Fixed quotes
    tags: ['new-arrival'],
    isPublished: true,
    price: 120.99,
    listPrice: 140.0,
    brand: 'Nike',
    avgRating: 4.8,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 8 },
    ],
    numSales: 50,
    countInStock: 20,
    description:
      'Nike Air Max running shoes provide comfort and durability for daily runs and workouts.',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black', 'White', 'Blue'],
    reviews: [],
  },  
  {
    name: 'Adidas Ultraboost Sneakers',
    slug: toSlug('Adidas Ultraboost Sneakers'),
    category: 'Shoes',
    images: ['/image/2.1.jpg', '/image/2.2.jpg'],
    tags: ['best-seller'],
    isPublished: true,
    price: 150.49,
    listPrice: 170.0,
    brand: 'Adidas',
    avgRating: 4.7,
    numReviews: 20,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 3 },
      { rating: 4, count: 7 },
      { rating: 5, count: 10 },
    ],
    numSales: 80,
    countInStock: 25,
    description:
      'Adidas Ultraboost sneakers provide a responsive boost midsole and premium knit upper for comfort.',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Black', 'Grey', 'Red'],
    reviews: [],
  },
  {
    name: 'Puma Ignite Pro Training Shoes',
    slug: toSlug('Puma Ignite Pro Training Shoes'),
    category: 'Shoes',
    images: ['/image/3.1.jpg', '/image/3.2.jpg'],
    tags: ['featured'],
    isPublished: true,
    price: 99.99,
    listPrice: 110.0,
    brand: 'Puma',
    avgRating: 4.5,
    numReviews: 18,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 1 },
      { rating: 3, count: 2 },
      { rating: 4, count: 6 },
      { rating: 5, count: 8 },
    ],
    numSales: 60,
    countInStock: 30,
    description:
      'Puma Ignite Pro Training Shoes offer maximum support and cushioning for gym workouts and sports.',
    sizes: ['7', '8', '9', '10', '11', '12'],
    colors: ['Blue', 'Black', 'Green'],
    reviews: [],
  },
  {
    name: 'Reebok Classic Leather Sneakers',
    slug: toSlug('Reebok Classic Leather Sneakers'),
    category: 'Shoes',
    images: ['/image/4.1.jpg', '/image/4.2.jpg'],
    tags: ['classic'],
    isPublished: true,
    price: 89.99,
    listPrice: 100.0,
    brand: 'Reebok',
    avgRating: 4.6,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 1 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 4 },
    ],
    numSales: 40,
    countInStock: 18,
    description:
      'Reebok Classic Leather Sneakers deliver a timeless look with a comfortable feel.',
    sizes: ['8', '9', '10', '11'],
    colors: ['White', 'Black'],
    reviews: [],
  },
  {
    name: 'Under Armour Charged Assert 9',
    slug: toSlug('Under Armour Charged Assert 9'),
    category: 'Shoes',
    images: ['/image/5.1.jpg', '/image/5.2.jpg'],
    tags: ['sports'],
    isPublished: true,
    price: 75.99,
    listPrice: 85.0,
    brand: 'Under Armour',
    avgRating: 4.4,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 3 },
      { rating: 4, count: 5 },
      { rating: 5, count: 5 },
    ],
    numSales: 35,
    countInStock: 22,
    description:
      'Under Armour Charged Assert 9 shoes offer lightweight breathability and enhanced durability.',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black', 'Grey'],
    reviews: [],
  },
  {
    name: 'Asics Gel-Venture 8 Running Shoes',
    slug: toSlug('Asics Gel-Venture 8 Running Shoes'),
    category: 'Shoes',
    images: ['/image/6.1.jpg', '/image/6.2.jpg'],
    tags: ['trail-running'],
    isPublished: true,
    price: 69.99,
    listPrice: 80.0,
    brand: 'Asics',
    avgRating: 4.7,
    numReviews: 16,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 2 },
      { rating: 4, count: 5 },
      { rating: 5, count: 8 },
    ],
    numSales: 42,
    countInStock: 19,
    description:
      'Asics Gel-Venture 8 provides superior grip and cushioning for trail running enthusiasts.',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Blue', 'Black', 'Orange'],
    reviews: [],
  },
  {
    name: 'New Balance 990v5 Sneakers',
    slug: toSlug('New Balance 990v5 Sneakers'),
    category: 'Shoes',
    images: ['/image/7.1.jpg', '/image/7.2.jpg'],
    tags: ['premium'],
    isPublished: true,
    price: 174.99,
    listPrice: 190.0,
    brand: 'New Balance',
    avgRating: 4.9,
    numReviews: 25,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 1 },
      { rating: 4, count: 5 },
      { rating: 5, count: 19 },
    ],
    numSales: 60,
    countInStock: 15,
    description:
      'New Balance 990v5 Sneakers are premium running shoes known for durability and comfort.',
    sizes: ['8', '9', '10', '11', '12'],
    colors: ['Grey', 'Black'],
    reviews: [],
  },
  {
    name: 'Skechers Arch Fit Sneakers',
    slug: toSlug('Skechers Arch Fit Sneakers'),
    category: 'Shoes',
    images: ['/image/8.1.jpg', '/image/8.2.jpg'],
    tags: ['comfortable'],
    isPublished: true,
    price: 85.49,
    listPrice: 95.0,
    brand: 'Skechers',
    avgRating: 4.5,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 1 },
      { rating: 3, count: 2 },
      { rating: 4, count: 3 },
      { rating: 5, count: 4 },
    ],
    numSales: 30,
    countInStock: 20,
    description:
      'Skechers Arch Fit Sneakers are designed with arch support for long-lasting comfort.',
    sizes: ['7', '8', '9', '10', '11'],
    colors: ['Black', 'Navy'],
    reviews: [],
  },
];

  

const reviews = [
    {
      rating: 1,
      title: 'Poor quality',
      comment:
        'Very disappointed. The item broke after just a few uses. Not worth the money.',
    },
    {
      rating: 2,
      title: 'Disappointed',
      comment:
        "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
    },
    {
      rating: 2,
      title: 'Needs improvement',
      comment:
        "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
    },
    {
      rating: 3,
      title: 'not bad',
      comment:
        'This product is decent, the quality is good but it could use some improvements in the details.',
    },
    {
      rating: 3,
      title: 'Okay, not great',
      comment:
        'It works, but not as well as I hoped. Quality is average and lacks some finishing.',
    },
    {
      rating: 3,
      title: 'Good product',
      comment:
        'This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.',
    },
    {
      rating: 4,
      title: 'Pretty good',
      comment:
        "Solid product! Great value for the price, but there's room for minor improvements.",
    },
    {
      rating: 4,
      title: 'Very satisfied',
      comment:
        'Good product! High quality and worth the price. Would consider buying again.',
    },
    {
      rating: 4,
      title: 'Absolutely love it!',
      comment:
        'Perfect in every way! The quality, design, and comfort exceeded all my expectations.',
    },
    {
      rating: 4,
      title: 'Exceeded expectations!',
      comment:
        'Fantastic product! High quality, feels durable, and performs well. Highly recommend!',
    },
    {
      rating: 5,
      title: 'Perfect purchase!',
      comment:
        "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
    },
    {
      rating: 5,
      title: 'Highly recommend',
      comment:
        "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
    },
    {
      rating: 5,
      title: 'Just what I needed',
      comment:
        'Exactly as described! Quality exceeded my expectations, and it arrived quickly.',
    },
    {
      rating: 5,
      title: 'Excellent choice!',
      comment:
        'This product is outstanding! Everything about it feels top-notch, from material to functionality.',
    },
    {
      rating: 5,
      title: "Couldn't ask for more!",
      comment:
        "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
    },
  ]

  const data= {
    products,
    users,
    reviews,
headerMenus: [
      { name: "Today's Deal", href: "/search?tag=todays-deal" },
      { name: "New Arrivals", href: "/search?tag=new-arrival" },
      { name: "Featured Products", href: "/search?tag=featured" },
      { name: "Best Sellers", href: "/search?tag=best-seller" },
      { name: "Browsing History", href: "/#browsing-history" },
      { name: "Customer Service", href: "/page/customer-service" },
      { name: "About Us", href: "/page/about-us" },
      { name: "Help", href: "/page/help" },
    ],
    carousels: [
        {
          title: 'Most Popular Shoes For Sale',
          buttonCaption: 'Shop Now',
          image: '/images/banner3.jpg',
          url: '/search?category=Shoes',
          isPublished: true,
        },
        {
          title: '',
          buttonCaption: 'Shop Now',
          image: '/images/banner1.jpg',
          url: '/search?category=T-Shirts',
          isPublished: true,
        },
        {
          title: '',
          buttonCaption: 'See More',
          image: '/images/banner2.jpg',
          url: '/search?category=Wrist Watches',
          isPublished: true,
        },
      ]

  }



export default data
    
  