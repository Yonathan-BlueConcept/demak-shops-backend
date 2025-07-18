// Define the object structure using an interface
export interface ShopItem {
  id: string;
  imageURL: string;
  price: number;
  title: string;
  description: string;
  category: string;
  carsouselImages: string[]
}

// Create an array of these objects
// export const shopItems: ShopItem[] = [
//   {
//     id: "1",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%201.jpg?alt=media&token=45736a06-4922-48a7-a0ef-b389cb66a980",
//     price: 8000,
//     title: "Armani",
//     description: "Amazing trousers from turkey.Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
//     category: "Trouser",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%202.jpg?alt=media&token=80a49bbe-5d4d-44fd-a016-a3583bb82126","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%201.jpg?alt=media&token=45736a06-4922-48a7-a0ef-b389cb66a980"]
//   },

//   {
//     id: "2",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%203.jpg?alt=media&token=a178b0f3-4733-4376-9ec6-eef16cb150b6",
//     price: 9000,
//     title: "Marshal",
//     description: "High Quality Turkey Trousers for you",
//     category: "Trouser",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%204.jpg?alt=media&token=4822a5f3-6d6b-4564-aa37-55a4da605951","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%203.jpg?alt=media&token=a178b0f3-4733-4376-9ec6-eef16cb150b6"]
//   },

//   {
//     id: "3",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/rebook.jpg?alt=media&token=af27ff38-deb9-4784-ba15-76172a1a2c13",
//     price: 16500,
//     title: "Rebook",
//     description: "Reebok comfort shoe",
//     category: "Shoe",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/rebook%202.jpg?alt=media&token=d4af770a-ce7c-4ad7-927f-a975521d2ac4","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/rebook.jpg?alt=media&token=af27ff38-deb9-4784-ba15-76172a1a2c13"]
//   },

//   {
//     id: "4",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%201.jpg?alt=media&token=a4c9b935-db09-4709-80dd-53a88a81bac5",
//     price: 13000,
//     title: "ALDO CHELSEA BOOTS",
//     description: "High Quality Elegant Shoe",
//     category: "Shoe",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%202.jpg?alt=media&token=1cc71115-9ae3-4664-bc33-de7649c2d3c3","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%201.jpg?alt=media&token=a4c9b935-db09-4709-80dd-53a88a81bac5","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%203.jpg?alt=media&token=a2efa364-ebe1-4254-a64c-a417d3f9bf52"]
//   },

//   {
//     id: "5",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%201.jpg?alt=media&token=4a4c54bd-83c8-48d3-abcb-303f0e2ba53e",
//     price: 2800,
//     title: "Ette",
//     description: "Best Shirts in the town for you",
//     category: "Shirt",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%203.jpg?alt=media&token=2bdaedda-1652-4715-8d9f-7e4ef98179ae","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%202.jpg?alt=media&token=4995c1d6-483c-40e3-a22b-9c7f5732ada2","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%201.jpg?alt=media&token=4a4c54bd-83c8-48d3-abcb-303f0e2ba53e"]
//   },


//   {
//     id: "6",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b",
//     price: 9000,
//     title: "PRADA",
//     description: "the best full cloth for you. Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
//     category: "Full Cloth",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%202.jpg?alt=media&token=e09ed54f-af29-403f-8f84-f41ebe27c4ba","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b"]
//   },
//   {
//     id: "8",
//     imageURL:"https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%202.jpg?alt=media&token=e09ed54f-af29-403f-8f84-f41ebe27c4ba",
//     price: 11000,
//     title: "Linkon Sivo",
//     description: "the best full cloth for you. Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
//     category: "Full Cloth",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%202.jpg?alt=media&token=e09ed54f-af29-403f-8f84-f41ebe27c4ba","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b"]
//   },

//   {
//     id: "7",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%20gucci.jpg?alt=media&token=086f2ec7-bfd9-44c7-a96b-f514d0f10aff",
//     price: 9000,
//     title: "GUCCI",
//     description: "GUCCI for you. best full cloth in the town. Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
//     category: "Full Cloth",
//     carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%20gucci.jpg?alt=media&token=086f2ec7-bfd9-44c7-a96b-f514d0f10aff"]
//   },


// ];

// export const shopItems: ShopItem[] = [
//   {
//     id: "10",
//     imageURL: "https://media.istockphoto.com/id/1478414744/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=eZz5FC6n-uxDXh0PSUPsyT71bqGfUFIy-GQtRXEtpb4=",
//     price: 3500,
//     title: "Blue Mark",
//     description: "Lightweight running shoes designed for comfort and performance, featuring breathable mesh and durable soles.",
//     category: "Trouser",
//     carsouselImages: ["https://media.istockphoto.com/id/1478414744/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=eZz5FC6n-uxDXh0PSUPsyT71bqGfUFIy-GQtRXEtpb4=","https://media.istockphoto.com/id/1478414904/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=fW7ZD1aa_vdJg8KprxFH9h2k7nAoTDc6LC31fud6mZ4=","https://media.istockphoto.com/id/1478414948/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=o6_zsyUT4l8YQiBRRQa0X36l2JrSRsYk-S5e4EcDcqk="]
//   },
//   {
//     id: "11",
//     imageURL: "https://media.istockphoto.com/id/623522136/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=VwjX7Y0pd6KOaDnv8QAkL1Tsr4qTchhrWx7FqS3RSTw=",
//     description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
//     price: 4000,
//     title: "Zara",
//     category: "Trouser",
//     carsouselImages: ["https://media.istockphoto.com/id/623522136/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=VwjX7Y0pd6KOaDnv8QAkL1Tsr4qTchhrWx7FqS3RSTw=","https://media.istockphoto.com/id/623522452/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=1sb52bw0iJbpK3PPfY8Tz3b0jm9AstsJ3rzCeek8m4Y=","https://media.istockphoto.com/id/623522396/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=uaxDAt_ytMhzCGZWNCzo5wA90ExWj7ki5wL0TuI4JyE="]
//   },
//   {
//     id: "12",
//     imageURL: "https://media.istockphoto.com/id/623454542/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=gadYcLCTqVXwQnrZT-47w0gp3k2ZDyYk2oJNdxS0rHI=",
//     description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
//     price: 3300,
//     title: "Victory",
//     category: "Trouser",
//     carsouselImages: ["https://media.istockphoto.com/id/623454542/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=gadYcLCTqVXwQnrZT-47w0gp3k2ZDyYk2oJNdxS0rHI=","https://media.istockphoto.com/id/623454476/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=Ax2D2ZM_bOR86uk5WvRrZ0XWJrHph5rjpf7HeH16Xqw=","https://media.istockphoto.com/id/623454180/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=ZwUYJ2DWgOW2rFCc0Eqn-koEIx-Opeapws-aib6nJfM="]
//   },
//   {
//     id: "1",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/Nejat's%20Shoe.jpg?alt=media&token=401e15c8-e252-4666-acb1-138ebdfe1e2d",
//     price: 4200,
//     title: "Chanel",
//     description: "A timeless classic, this 100% cotton white is soft, durable, and perfect for everyday wear.",
//     category: "Shoe",
//     carsouselImages: ["https://media.istockphoto.com/id/488557544/photo/ladies-sandal.webp?s=2048x2048&w=is&k=20&c=QaSg4k6zKYEXWqMXYRK7zsbeFYXFIl1lQ466Gm2F-d8=","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/Nejat's%20Shoe.jpg?alt=media&token=401e15c8-e252-4666-acb1-138ebdfe1e2d","https://media.istockphoto.com/id/488557142/photo/ladies-sandal.jpg?s=612x612&w=0&k=20&c=rnxqzSn9daKpYIhL9276EDklPAAz8lS_ZDmPDU7GdWc="]
//   },
//   {
//     id: "2",
//     imageURL: "https://media.istockphoto.com/id/1360246837/photo/woman-putting-on-elegant-shoes-close-up-on-legs-and-red-dress.jpg?s=612x612&w=0&k=20&c=Yaxv0BRfT-5MYqjgOBB0HhEeDeVKUl-F7gjOLmIywbY=",
//     price: 7500,
//     title: "Rose's Love",
//     description: "A timeless classic, this 100% cotton is soft, durable, and perfect for everyday wear.",
//     category: "Shoe",
//     carsouselImages: ["https://media.istockphoto.com/id/148237273/photo/high-heels-shoes.jpg?s=612x612&w=0&k=20&c=KNu-hGkT9T6sXEo2lD37aBO1dLKYtRptaKkAw2PS7pM=","https://media.istockphoto.com/id/509995972/photo/lady-next-to-red-moto-scooter.jpg?s=612x612&w=0&k=20&c=SzaWc8o5r22X9kTyQnuAMNPMrmJ04XV9wvpjcvtSK8U=","https://media.istockphoto.com/id/1360246837/photo/woman-putting-on-elegant-shoes-close-up-on-legs-and-red-dress.jpg?s=612x612&w=0&k=20&c=Yaxv0BRfT-5MYqjgOBB0HhEeDeVKUl-F7gjOLmIywbY="]
//   },
//   {
//     id: "3",
//     imageURL: "https://media.istockphoto.com/id/1143262564/photo/girl-legs-in-bright-stylish-stiletto-shoes.jpg?s=612x612&w=0&k=20&c=8dxmhGhtGgGq0RyznqDYofg5Q4RhI-KCJCT2f81x-TA=",
//     price: 8000,
//     title: "Luvi leon",
//     description: "A timeless classic, this 100% cotton white T-shirt is soft, durable, and perfect for everyday wear.",
//     category: "Shoe",
//     carsouselImages: ["https://media.istockphoto.com/id/1162584356/photo/woman-suffering-from-leg-pain-outdoors-because-of-uncomfortable-shoes.jpg?s=612x612&w=0&k=20&c=PU12bLn2YNYbDiBrQ_vJr3v2WY7Q1ZiZQLvc-oraPzQ=",  "https://media.istockphoto.com/id/1337470049/photo/shot-of-an-unrecognisable-businesswoman-walking-up-a-staircase-in-the-city.jpg?s=612x612&w=0&k=20&c=Qfg4OAOm4M1y4vO6FRyMbONc7uE1sf_PjI4n4jvoghI=","https://media.istockphoto.com/id/1143262564/photo/girl-legs-in-bright-stylish-stiletto-shoes.jpg?s=612x612&w=0&k=20&c=8dxmhGhtGgGq0RyznqDYofg5Q4RhI-KCJCT2f81x-TA="]
//   },


//   {
//     id: "13",
//     imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/Nejat's%20Dress.jpg?alt=media&token=f6e0ab9b-1643-4e84-ba06-e5ebdd8a39dc",
//     price: 7500,
//     title: "Leon girls",
//     description: "A timeless classic dress, this 100% cotton white  is soft, durable, and perfect for everyday wear.",
//     category: "Dress",
//     carsouselImages: ["https://media.istockphoto.com/id/1690470263/photo/photo-of-cute-carefree-girl-dressed-sexy-clothes-dancing-enjoying-discotheque-isolated-pink.jpg?s=612x612&w=0&k=20&c=KNhwGLpm8tscHby_BfQjunFNV8np559R_mwXxFdrgqY=","https://media.istockphoto.com/id/1047654268/photo/profile-side-view-of-attractive-cheerful-cute-lovely-positive-nice-charming-adorable-wavy.jpg?s=612x612&w=0&k=20&c=tg01mH065uTSaZZqkciC-XryCFBu8Otrh7KJp3WDsYA=","https://media.istockphoto.com/id/1690458295/photo/full-size-photo-of-adorable-nice-positive-girl-wear-princess-crown-diadem-isolated-on-pink.jpg?s=612x612&w=0&k=20&c=gEtutI0HDCrLyZOwEfQR5eRkYYAd2S_2VSoFRr06UIU="]
//   },

//   {
//     id: "14",
//     imageURL: "https://media.istockphoto.com/id/1088947570/photo/beautiful-woman-in-blue-dress.jpg?s=612x612&w=0&k=20&c=OA0xuJk8pTV5Pgi4klRvwpMH_hv0wA2p-XRLiaPLrxw=",
//     price: 9500,
//     title: "Blue Walk",
//     description: "A timeless classic dress, this 100% cotton white  is soft, durable, and perfect for everyday wear.",
//     category: "Dress",
//     carsouselImages: ["https://media.istockphoto.com/id/646281830/photo/sisters-show-clothes.jpg?s=612x612&w=0&k=20&c=5wWj7Luea0j8TKrCzkrHLqWu6tOIiVRnGxD38e8fGqo=","https://media.istockphoto.com/id/1088947570/photo/beautiful-woman-in-blue-dress.jpg?s=612x612&w=0&k=20&c=OA0xuJk8pTV5Pgi4klRvwpMH_hv0wA2p-XRLiaPLrxw=","https://media.istockphoto.com/id/926307220/photo/i-want-to-wear-this-elegant-beautiful-blue-dress-pretty-smiling-happy-excited-joyful.jpg?s=612x612&w=0&k=20&c=D1bBn1BIbrydSXefsn1bYasyE5J-pB0OJ9kvuESI1fU="]
//   },

//   {
//     id: "15",
//     imageURL: "https://media.istockphoto.com/id/1701930506/photo/serie-of-studio-photos-of-young-female-model-in-black-viscose-wrap-dress.jpg?s=612x612&w=0&k=20&c=ium7uUnrezVwbZRhJC0lCCjwf_iQxxKhAeEwd4KFKVQ=",
//     price: 8500,
//     title: "Lucky Black",
//     description: "A timeless classic dress, this 100% cotton white  is soft, durable, and perfect for everyday wear.",
//     category: "Dress",
//     carsouselImages: ["https://media.istockphoto.com/id/940519712/photo/beautiful-woman-sitting-on-the-floor.jpg?s=612x612&w=0&k=20&c=aXdgpCDXKQyTZUdMNePSsSjYzyqn1TOVU5aNn7JhMSU=","https://media.istockphoto.com/id/1701780354/photo/serie-of-studio-photos-of-young-female-model-in-black-silk-satin-wrap-midi-dress.jpg?s=612x612&w=0&k=20&c=x8mbMKxTBHDuLSOlCnPnDlcYAe9uWhmpQ64HCSxsA08=","https://media.istockphoto.com/id/1252015183/photo/beautiful-young-woman-with-mini-black-dress-sitting-on-white-chair-front-of-white-background.jpg?s=612x612&w=0&k=20&c=NVDlTMw2Rrnu9T4tfdSoNFdZuMU1VGYUQ1AP2Fg2sVg="]
//   },
//   {
//     id: "7",
//     imageURL: "https://media.istockphoto.com/id/621838400/photo/young-woman-street-style-leather-purse-and-a-coat.jpg?s=612x612&w=0&k=20&c=68VGizBYYxThpCtExQiskx9Lk_gosjowMwB4ovPzI9w=",
//     price: 8300,
//     title: "Dolce Luke",
//     description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
//     category: "Bag",
//     carsouselImages: ["https://media.istockphoto.com/id/1223379047/photo/fashion-portrait-of-elegant-woman-in-brown-sweater.jpg?s=612x612&w=0&k=20&c=wlBMrmnqdmWJ9wNECASE8hs0mf2P5vFBJfqvOswlMo8=","https://media.istockphoto.com/id/621838400/photo/young-woman-street-style-leather-purse-and-a-coat.jpg?s=612x612&w=0&k=20&c=68VGizBYYxThpCtExQiskx9Lk_gosjowMwB4ovPzI9w=","https://media.istockphoto.com/id/1192107268/photo/beautiful-woman-in-black-holds-fashion-handbag.jpg?s=612x612&w=0&k=20&c=OEzRB_QhNIEVOPmI0vnoBXVIAMaXrjemlHtfOtT5DRM="]
//   },
//   {
//     id: "8",
//     imageURL: "https://media.istockphoto.com/id/1271796113/photo/women-is-holding-handbag-near-luxury-car.jpg?s=612x612&w=0&k=20&c=-jtXLmexNgRa-eKqA1X8UJ8QYWhW7XgDiWNmzuuCHmM=",
//     price: 9100,
//     title: "Vion Maz",
//     description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
//     category: "Bag",
//     carsouselImages: ["https://media.istockphoto.com/id/154417962/photo/red-luxury-leather-bag-on-white-background.jpg?s=612x612&w=0&k=20&c=m_z_kkWoQpX_vnonNv8k_G771M0vyZrRQZfihbvaNrY=","https://media.istockphoto.com/id/1271796113/photo/women-is-holding-handbag-near-luxury-car.jpg?s=612x612&w=0&k=20&c=-jtXLmexNgRa-eKqA1X8UJ8QYWhW7XgDiWNmzuuCHmM=","https://media.istockphoto.com/id/613656648/photo/beautiful-fashionable-big-red-handbag-standing-next-to-leggy-woman.jpg?s=612x612&w=0&k=20&c=edVRIKVGHsCoEe0_GJvVCxOVmYizz5vi8EnZMWmH3qY="]
//   },
//   {
//     id: "9",
//     imageURL: "https://media.istockphoto.com/id/916257096/photo/pink-women-bag-isolated.jpg?s=612x612&w=0&k=20&c=uskDO5rdc4w1UBfYtPsTXFjvMr8I6upSwd_EbLee9mk=",
//     price: 10000,
//     title: "Lizk Comin",
//     description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
//     category: "Bag",
//     carsouselImages: ["https://media.istockphoto.com/id/618976674/photo/fashion-woman-shopping.jpg?s=612x612&w=0&k=20&c=twPlCtJ05j_SsUXjW_ZK3l9UnuC-GbunecDdC03QScQ=","https://media.istockphoto.com/id/916257096/photo/pink-women-bag-isolated.jpg?s=612x612&w=0&k=20&c=uskDO5rdc4w1UBfYtPsTXFjvMr8I6upSwd_EbLee9mk="]
//   },
// ];

export const shopItems: ShopItem[] = [
  // {
  //   id: "1",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/dama%205.jpg?alt=media&token=6e25340c-b918-4160-9737-d7595773676b",
  //   price: 2200,
  //   title: " ",
  //   description: `
  //   \nColour 2
  //   \nቁጥር 35,36,37,38,39`,
  //   category: "Shoe",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/dama%204.jpg?alt=media&token=50b965d5-560f-4b52-9b47-38d816f8ed4a", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/dama%203.jpg?alt=media&token=8c2bc593-c632-4ca8-9d54-b3f96db4f417", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/dama%202.jpg?alt=media&token=88cf6f93-348e-4c42-9434-9bd697abe03d", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/dama%201.jpg?alt=media&token=4231f506-d214-49a2-94be-09702e1e076c"]
  // },
  // {
  //   id: "2",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/diamond%205.jpg?alt=media&token=94975946-ed2e-4624-932e-d26896012d12",
  //   price: 2200,
  //   title: " ",
  //   description: `
  //   \nColour 2
  //   \nቁጥር 35,36,37,38,39`,
  //   category: "Shoe",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/diamond%204.jpg?alt=media&token=4471c253-35d9-40be-a321-39a7834966f3", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/diamond%203.jpg?alt=media&token=f9c7bf9c-beb1-429d-8ea5-f5d48589fb3e", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/diamond%202.jpg?alt=media&token=858614ae-c593-436f-af81-815dd5a86814", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/dimond%201.jpg?alt=media&token=1c5ecde7-9785-49bb-9623-252713cd2053"]
  // },
  // {
  //   id: "3",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flower%205.jpg?alt=media&token=91d2226f-40ed-4341-9aea-c1b0b2e8c2bd",
  //   price: 2200,
  //   title: " ",
  //   description:  `
  //   \nColour 2
  //   \nቁጥር 35,36,37,38,39`,
  //   category: "Shoe",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flower%204.jpg?alt=media&token=ce92ef72-835e-45c3-af4b-0ff6a180df0e", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flower%203.jpg?alt=media&token=a1953982-9749-4c2b-a320-624a73bf3581", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flower%202.jpg?alt=media&token=74d4c374-d9e1-4cbf-ba55-c4fac0c77eaa", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flower%201.jpg?alt=media&token=dcbe22fd-34dd-4f95-8a2a-9f62dfaa3986"]
  // },
  // {
  //   id: "4",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ring%205.jpg?alt=media&token=0f19bd1c-587f-4607-8b7c-6354a2885b51",
  //   price: 1995,
  //   title: " ",
  //   description:  `
  //   \nColour 2
  //   \nቁጥር 35,36,37,38,39`,
  //   category: "Shoe",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ring%204.jpg?alt=media&token=bb49ed1b-6545-4915-a61b-b90f3ef39e91","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ring%203.jpg?alt=media&token=58d17cc0-036d-45c5-809a-7f2b04c8ec3b","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ring%202.jpg?alt=media&token=1db89657-18bd-4261-8f0f-7dc76d9c5b51","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ring%201.jpg?alt=media&token=6030cb86-9348-4689-8b97-90e027da551c"]
  // },
  // {
  //   id: "4",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/satera%204.jpg?alt=media&token=80acf3db-9e5a-44e8-8409-2d7c6bd07259",
  //   price: 1995,
  //   title: " ",
  //   description: `
  //   \nColour 2
  //   \nቁጥር 35,36,37,38,39`,
  //   category: "Shoe",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/satera%203.jpg?alt=media&token=f747d26e-4949-4aeb-89c5-f9a4e5b1f74f","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/satera%202.jpg?alt=media&token=154aee94-ab24-4ef2-9e87-dab91c2e0b0e","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/satera%201.jpg?alt=media&token=e5880519-b66a-4fce-9f67-7b5454162b53"]
  // },
  // {
  //   id: "5",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/square%201.jpg?alt=media&token=6fbf280d-4def-469c-bf79-d2d94e48ee3e",
  //   price: 2200,
  //   title: " ",
  //   description: `
  //   \nColour 2
  //   \nቁጥር 35,36,37,38,39`,
  //   category: "Shoe",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/square%202.jpg?alt=media&token=ebb0eb53-f4c2-45ec-be1a-41c458bb958b","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/square%203.jpg?alt=media&token=7c950e72-4a89-43ce-bec5-83cbae2b78cc","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/square%204.jpg?alt=media&token=69f77ee1-29c8-49da-b0b1-0ba73535d65d"]
  // },
  // {
  //   id: "6",
  //   imageURL: "",
  //   price: 1,
  //   title: " ",
  //   description: `.
  // `,
  //   category: "Dress",
  //   carsouselImages: ["","",""]
  // },
  // {
  //   id: "7",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20full%20dress%204.jpg?alt=media&token=a732e75f-1f44-4af4-a370-e44aaae1ed28",
  //   price: 1595,
  //   title: " ",
  //   description: `.
  // `,
  //   category: "Dress",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20full%20dress%202.jpg?alt=media&token=9a9e1549-6856-41f7-b646-60c71a3598c6","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20full%20dress%204.jpg?alt=media&token=a732e75f-1f44-4af4-a370-e44aaae1ed28"]
  // },
  // {
  //   id: "8",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress_%20mini%20skirt%203.jpg?alt=media&token=911be8cb-1c9b-4581-9af6-69d5e56b7157",
  //   price: 1200,
  //   title: "Mini Skirt",
  //   description: `4 Colors
  // `,
  //   category: "Dress",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_mini%20skirt%202.jpg?alt=media&token=76f8c6b5-f711-4b90-8ebb-1cc8178b050a","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20mini%20skirt%201.jpg?alt=media&token=8bb26c74-7572-4f0d-a785-d2742cd7ba93"]
  // },
  // {
  //   id: "9",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress_%20mini%20skirt%203.jpg?alt=media&token=911be8cb-1c9b-4581-9af6-69d5e56b7157",
  //   price: 1200,
  //   title: "Mini Skirt",
  //   description: `4 Colors`,
  //   category: "Dress",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_mini%20skirt%202.jpg?alt=media&token=76f8c6b5-f711-4b90-8ebb-1cc8178b050a","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20mini%20skirt%201.jpg?alt=media&token=8bb26c74-7572-4f0d-a785-d2742cd7ba93"]
  // },
  // {
  //   id: "10",
  //   imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20top%20b%201.jpg?alt=media&token=84924861-cbee-4400-a70a-816e7264d14a",
  //   price: 900,
  //   title: "Mini Skirt",
  //   description: `4 Colors
  // `,
  //   category: "Dress",
  //   carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20top%20b%202.jpg?alt=media&token=f2fe6f4c-6f9d-4d74-b675-13af89804742","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20top%20b%203.jpg?alt=media&token=060d0e2a-9fba-43c9-80ed-900b1bb73bd6","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/ab_style_dress%20top%20b%204.jpg?alt=media&token=a4437960-07b8-4e5a-9dbd-4caa16b51dcf"]
  // },






  {
    id: "1",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20blushing%20silver%204000%20birr%201.jpg?alt=media&token=a7d937ec-1d4d-489e-b058-eb85cd7e33c3",
    price: 4000,
    title: "Blushing Silver",
    description: `Blushing Silver Cherry Blow Embrace timeless elegance with our Rose Dress, designed for those who love a touch of romance in their wardrobe. 
  `,
    category: "Rose",
    carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20blushing%20silver%204000%20birr%203.jpg?alt=media&token=fa268445-d37c-4580-96be-7f21e7372048", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20blushing%20silver%204000%20birr%202.jpg?alt=media&token=fbc7f137-47c8-48e2-a753-90bd2f1ac9f3", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20blushing%20silver%204000%20birr%201.jpg?alt=media&token=a7d937ec-1d4d-489e-b058-eb85cd7e33c3"]
  },

  {
    id: "2",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20cherry%20glow%204500%20birr%202.jpg?alt=media&token=6e187eb6-929e-4676-8191-285f213c456a",
    price: 4500,
    title: "Cherry Blow",
    description: `Cherry Blow Embrace timeless elegance with our Rose Dress, designed for those who love a touch of romance in their wardrobe. 
  `,
    category: "Rose",
    carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20cherry%20glow%204500%20birr.jpg?alt=media&token=02e2b6b5-a258-43da-a99e-8e92f8708b3e", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20blushing%20silver%204000%20birr%203.jpg?alt=media&token=fa268445-d37c-4580-96be-7f21e7372048", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20blushing%20silver%204000%20birr%202.jpg?alt=media&token=fbc7f137-47c8-48e2-a753-90bd2f1ac9f3", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20blushing%20silver%204000%20birr%201.jpg?alt=media&token=a7d937ec-1d4d-489e-b058-eb85cd7e33c3"]
  },


  {
    id: "3",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20flora%20dream%20maxi%206000%201%20birr.jpg?alt=media&token=e53ae47f-fdc6-4951-a29b-72c0c159d7c9",
    price: 6000,
    title: "Flora Dream Maxi",
    description: `
    Cherry Blow Embrace timeless elegance with our Rose Dress, designed for those who love a touch of romance in their wardrobe.
  `,
    category: "Rose",
    carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20flora%20dream%20maxi%206000%203%20birr.jpg?alt=media&token=e4055e53-5068-4ab6-804c-64f0c42d51d1", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20flora%20dream%20maxi%206000%202%20birr.jpg?alt=media&token=bda9545b-3fe6-4caa-aca3-1d27c5eaad01", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20flora%20dream%20maxi%206000%201%20birr.jpg?alt=media&token=e53ae47f-fdc6-4951-a29b-72c0c159d7c9"]
  },

  {
    id: "4",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20green%205000%20birr%201%20%20earthy%20vibes.jpg?alt=media&token=8f5e8a0d-13fb-40e6-b87c-bae0d893a4cf",
    price: 5000,
    title: "Flora Dream Maxi",
    description: `
  Flora Dream Maxi Make a bold statement with our stunning Green Dress, ideal for both day and evening wear. Its rich, vibrant shade symbolizes freshness and style, while the tailored design ensures a comfortable yet sophisticated fit. Perfect for parties.
  `,
    category: "Green",
    carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20green%205000%20birr%202.jpg?alt=media&token=f10949bd-f4bd-418a-be35-834e4505f644", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20green%205000%20birr%201%20%20earthy%20vibes.jpg?alt=media&token=8f5e8a0d-13fb-40e6-b87c-bae0d893a4cf"]
  },
  {
    id: "5",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20rose%20%205000%20birr%20tropical.jpg?alt=media&token=4c964ae3-33e2-49bd-880e-904f7df3bb31",
    price: 5000,
    title: "Tropical",
    description: `.
    Tropical Embrace timeless elegance with our Rose Dress, designed for those who love a touch of romance in their wardrobe. Crafted from soft, breathable fabric, this dress features a flattering silhouette and delicate floral patterns that make it perfect for casual outings or special occasions.
  `,
    category: "Rose",
    carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20green%205000%20birr%202.jpg?alt=media&token=f10949bd-f4bd-418a-be35-834e4505f644", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20green%205000%20birr%201%20%20earthy%20vibes.jpg?alt=media&token=8f5e8a0d-13fb-40e6-b87c-bae0d893a4cf"]
  },

  {
    id: "6",
    imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20sunset%20charm%202%204500%20birr.jpg?alt=media&token=fd205d96-63f9-4d0d-add4-b280a504af56",
    price: 4500,
    title: "SunSet Charm",
    description: `
    SunSet Charm Turn heads with our captivating Red Dress, the ultimate symbol of confidence and allure. This dress is designed to make you feel bold and beautiful, with a sleek cut that accentuates your curves. Ideal for date nights, formal gatherings, or any event where you want to leave a lasting impression.
  `,
    category: "Red",
    carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20sunset%20charm%202%204500%20birr.jpg?alt=media&token=fd205d96-63f9-4d0d-add4-b280a504af56", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20sunset%20charm%203%204500%20birr.jpg?alt=media&token=67343588-6fcd-44d5-bfc6-aa9a91ce7eb6", "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/muse%20sunset%20charm%204500%20birr.jpg?alt=media&token=98f46112-aeec-464a-b68d-d2c4311bb4a5"]
  },
]