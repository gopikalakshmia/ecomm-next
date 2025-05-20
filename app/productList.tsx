
interface Product{
Id:string,
Name:string,
Description:string,
ImageLink:string,
Price:number
}

export const productList:Product[]=[
  {
    Id: "1",
    Name: "Apple iPhone 15 Pro",
    Description: "6.1-inch display, A17 Pro chip, 128GB storage, Titanium body",
    ImageLink: "https://example.com/images/iphone15pro.jpg",
    Price: 999,
  },
  {
    Id: "2",
    Name: "Samsung Galaxy S24 Ultra",
    Description: "6.8-inch AMOLED, Snapdragon 8 Gen 3, 256GB storage",
    ImageLink: "https://example.com/images/galaxy-s24-ultra.jpg",
    Price: 1199,
  },
  {
    Id: "3",
    Name: "Sony WH-1000XM5 Headphones",
    Description: "Wireless noise-canceling headphones with up to 30 hours battery life",
    ImageLink: "https://example.com/images/sony-wh1000xm5.jpg",
    Price: 399,
  },
  {
    Id: "4",
    Name: "Apple iPad Air (M2)",
    Description: "10.9-inch Liquid Retina display, Apple M2 chip, Wi-Fi 6",
    ImageLink: "https://example.com/images/ipad-air-m2.jpg",
    Price: 599,
  },
  {
    Id: "5",
    Name: "Dell XPS 15 Laptop",
    Description: "Intel Core i7, 16GB RAM, 512GB SSD, 15.6-inch 4K display",
    ImageLink: "https://example.com/images/dell-xps15.jpg",
    Price: 1799,
  }
]