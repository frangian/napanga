import macetaImg from '../assets/maceta.jpg'

export const productList = [
  {
    id:1,
    title:'P1',
    capacity:"5 litros",
    characteristics: 'Tela resistente de 180gr, transpirable y lavable. Ideal para: produccion',
    image: macetaImg,
    price: 600,
    category: "Cultivo",
    stock:10
  },
  {
    id:2,
    title:'P2',
    capacity:"10 litros",
    characteristics: 'Tela resistente de 180gr, transpirable y lavable. Ideal para: produccion',
    image: macetaImg,
    price: 1000,
    category: "Cultivo",
    stock:8
  },
  {
    id:3,
    title:'Verde Vivo',
    capacity:"16 litros",
    characteristics: 'Tela resistente de 300gr, transpirable y lavable. Ideal para: Hierbas aromáticas y pequeñas flores',
    image: macetaImg,
    price: 1500,
    category: "Deco",
    stock:5
  }
]

export const productsCategories = [...new Set(["Todos", ...productList.map(product => product.category)])];


