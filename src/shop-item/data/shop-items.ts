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
  export const shopItems: ShopItem[] = [
    {
      id: "10",
      imageURL: "https://media.istockphoto.com/id/1478414744/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=eZz5FC6n-uxDXh0PSUPsyT71bqGfUFIy-GQtRXEtpb4=",
      price: 3500,
      title: "Blue Mark",
      description: "Lightweight running shoes designed for comfort and performance, featuring breathable mesh and durable soles.",
      category: "Trouser",
      carsouselImages: ["https://media.istockphoto.com/id/1478414744/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=eZz5FC6n-uxDXh0PSUPsyT71bqGfUFIy-GQtRXEtpb4=","https://media.istockphoto.com/id/1478414904/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=fW7ZD1aa_vdJg8KprxFH9h2k7nAoTDc6LC31fud6mZ4=","https://media.istockphoto.com/id/1478414948/photo/blonde-young-model-wearing-autumn-concept-clothes.jpg?s=612x612&w=0&k=20&c=o6_zsyUT4l8YQiBRRQa0X36l2JrSRsYk-S5e4EcDcqk="]
    },


    {
      id: "11",
      imageURL: "https://media.istockphoto.com/id/623522136/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=VwjX7Y0pd6KOaDnv8QAkL1Tsr4qTchhrWx7FqS3RSTw=",
      description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
      price: 4000,
      title: "Zara",
      category: "Trouser",
      carsouselImages: ["https://media.istockphoto.com/id/623522136/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=VwjX7Y0pd6KOaDnv8QAkL1Tsr4qTchhrWx7FqS3RSTw=","https://media.istockphoto.com/id/623522452/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=1sb52bw0iJbpK3PPfY8Tz3b0jm9AstsJ3rzCeek8m4Y=","https://media.istockphoto.com/id/623522396/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=uaxDAt_ytMhzCGZWNCzo5wA90ExWj7ki5wL0TuI4JyE="]
    },




    {
      id: "12",
      imageURL: "https://media.istockphoto.com/id/623454542/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=gadYcLCTqVXwQnrZT-47w0gp3k2ZDyYk2oJNdxS0rHI=",
      description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
      price: 1100,
      title: "Victory",
      category: "Trouser",
      carsouselImages: ["https://media.istockphoto.com/id/623454542/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=gadYcLCTqVXwQnrZT-47w0gp3k2ZDyYk2oJNdxS0rHI=","https://media.istockphoto.com/id/623454476/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=Ax2D2ZM_bOR86uk5WvRrZ0XWJrHph5rjpf7HeH16Xqw=","https://media.istockphoto.com/id/623454180/photo/fashion-photo-of-young-magnificent-woman-wearing-fashionable-summer-clothes.jpg?s=612x612&w=0&k=20&c=ZwUYJ2DWgOW2rFCc0Eqn-koEIx-Opeapws-aib6nJfM="]
    },







    {
      id: "1",
      imageURL: "https://images.unsplash.com/photo-1561909848-977d0617f275?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 4200,
      title: "Snikers",
      description: "A timeless classic, this 100% cotton white T-shirt is soft, durable, and perfect for everyday wear.",
      category: "Shoe",
      carsouselImages: ["https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8fDA%3D"]
    },

    {
      id: "2",
      imageURL: "https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
      price: 2500,
      title: "Puma",
      description: "A timeless classic, this 100% cotton white T-shirt is soft, durable, and perfect for everyday wear.",
      category: "Shoe",
      carsouselImages: ["https://images.unsplash.com/photo-1529810313688-44ea1c2d81d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8fDA%3D"]
    },
    {
      id: "3",
      imageURL: "https://images.unsplash.com/photo-1629955282615-8e86ac499410?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2V8ZW58MHx8MHx8fDA%3D",
      price: 3000,
      title: "Addidas",
      description: "A timeless classic, this 100% cotton white T-shirt is soft, durable, and perfect for everyday wear.",
      category: "Shoe",
      carsouselImages: ["https://images.unsplash.com/photo-1505874462322-dfcf87f819a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8fDA%3D",  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8fDA%3D"]
    },
    {
      id: "4",
      imageURL: "https://images.unsplash.com/photo-1521774971864-62e842046145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2V8ZW58MHx8MHx8fDA%3D",
      price: 4500,
      title: "Jordan",
      description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
      category: "Shoe",
      carsouselImages: ["https://images.unsplash.com/photo-1521774971864-62e842046145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNob2V8ZW58MHx8MHx8fDA%3D",  "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1570464197285-9949814674a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNob2V8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2V8ZW58MHx8MHx8fDA%3D"]
    },



    {
      id: "7",
      imageURL: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fHww",
      price: 2500,
      title: "Luiz neon",
      description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
      category: "Bag",
      carsouselImages: ["https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFnfGVufDB8fDB8fHww"]
    },




    {
      id: "8",
      imageURL: "https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 3200,
      title: "Vion Maz",
      description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
      category: "Bag",
      carsouselImages: ["https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8fHww"]
    },
    {
      id: "9",
      imageURL: "https://images.unsplash.com/photo-1484328256245-34b71758c30b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhZ3xlbnwwfHwwfHx8MA%3D%3D",
      price: 3700,
      title: "Lizk Comin",
      description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
      category: "Bag",
      carsouselImages: ["https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1523779105320-d1cd346ff52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFnfGVufDB8fDB8fHww"]
    },

 

    {
      id: "13",
      imageURL: "https://images.unsplash.com/photo-1507980668227-a52aa457699b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
      price: 1500,
      title: "Fancy Men",
      category: "Trouser",
      carsouselImages: ["https://images.unsplash.com/photo-1495264537403-93658651aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyb3VzZXJzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"]
    },

    {
      id: "14",
      imageURL: "https://images.unsplash.com/photo-1485842612006-6c50e8bf2576?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
      price: 2100,
      title: "Black & New",
      category: "Trouser",
      carsouselImages: ["https://images.unsplash.com/photo-1495264537403-93658651aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyb3VzZXJzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"]
    },



  ];
  