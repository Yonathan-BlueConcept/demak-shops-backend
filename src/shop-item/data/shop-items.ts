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
      id: "5",
      imageURL: "https://images.unsplash.com/photo-1514642837906-76ed4698ec34?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1000,
      title: "Luonn",
      description: "A timeless classic, this 100% cotton white T-shirt is soft, durable, and perfect for everyday wear.",
      category: "Hat",
      carsouselImages: [ "https://images.unsplash.com/photo-1514642837906-76ed4698ec34?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1490631537525-3b00d26805f9?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    },
    {
      id: "6",
      imageURL: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGF0fGVufDB8fDB8fHww",
      price: 1200,
      title: "RvcA",
      description: "A timeless classic, this 100% cotton white Shoe soft, durable, and perfect for everyday wear.",
      category: "Hat",
      carsouselImages: ["https://images.unsplash.com/flagged/photo-1557581462-0bf3e5907811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGF0fGVufDB8fDB8fHww","https://images.unsplash.com/photo-1542529727-24cb357c57d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGF0fGVufDB8fDB8fHww"]
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
      id: "10",
      imageURL: "https://images.unsplash.com/photo-1541840031508-326b77c9a17e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      price: 1500,
      title: "Adidas",
      description: "Lightweight running shoes designed for comfort and performance, featuring breathable mesh and durable soles.",
      category: "Trouser",
      carsouselImages: []
    },
    {
      id: "11",
      imageURL: "https://images.unsplash.com/photo-1533745654343-b28b0d2f8f03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
      price: 2500,
      title: "Zara",
      category: "Trouser",
      carsouselImages: ["https://images.unsplash.com/photo-1495264537403-93658651aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyb3VzZXJzfGVufDB8fDB8fHww","https://images.unsplash.com/photo-1533745654343-b28b0d2f8f03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJvdXNlcnxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"]
    },

    {
      id: "12",
      imageURL: "https://plus.unsplash.com/premium_photo-1674828600712-7d0caab39109?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJvdXNlcnxlbnwwfHwwfHx8MA%3D%3D",
      description: "Stay connected with this sleek smartphone, offering a high-resolution display, fast processor, and long battery life.",
      price: 1100,
      title: "Victory",
      category: "Trouser",
      carsouselImages: ["https://images.unsplash.com/photo-1495264537403-93658651aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyb3VzZXJzfGVufDB8fDB8fHww", "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJvdXNlcnN8ZW58MHx8MHx8fDA%3D"]
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


    {
      id: "15",
      imageURL: "https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
      price: 1500,
      title: "Novice",
      description: "This stylish leather backpack is perfect for work or travel, offering plenty of storage and a modern design.",
      category: "T-Shirt",
      carsouselImages: ["https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fHww","https://images.unsplash.com/photo-1522724514897-24b0eb7ba3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D"]
    },
    {
      id: "16",
      imageURL: "https://plus.unsplash.com/premium_photo-1690038781199-1c75a1e406c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 2500,
      title: "Badern Luis",
      description: "new shirt in the town miss it not.",
      category: "T-Shirt",
      carsouselImages: ["https://images.unsplash.com/photo-1522724514897-24b0eb7ba3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww","https://plus.unsplash.com/premium_photo-1690038781199-1c75a1e406c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    },
    {
      id: "17",
      imageURL: "https://images.unsplash.com/photo-1581791538302-03537b9c97bf?q=80&w=1779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: 1200,
      title: "Logia Navez",
      description: "new shirt in the town miss it not.",
      category: "T-Shirt",
      carsouselImages: ["https://images.unsplash.com/photo-1522724514897-24b0eb7ba3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww","https://plus.unsplash.com/premium_photo-1690038781199-1c75a1e406c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    },
    {
      id: "18",
      imageURL: "https://images.unsplash.com/photo-1592492135673-55966d3b541a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      price: 900,
      title: "Fun-Shirt",
      description: "new shirt in the town miss it not.",
      category: "T-Shirt",
      carsouselImages: ["https://images.unsplash.com/photo-1592492135673-55966d3b541a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1522724514897-24b0eb7ba3ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHQlMjBzaGlydHxlbnwwfHwwfHx8MA%3D%3D","https://images.unsplash.com/photo-1485218126466-34e6392ec754?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dCUyMHNoaXJ0fGVufDB8fDB8fHww","https://plus.unsplash.com/premium_photo-1690038781199-1c75a1e406c0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
    },
    {
      id: "19",
      imageURL: "https://plus.unsplash.com/premium_photo-1692340973422-675316d8152a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3VuJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D",
      price: 49.99,
      title: "Pinker Leon",
      description: "",
      category: "Sun Glass",
      carsouselImages: []
    },
    {
      id: "20",
      imageURL: "https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VuJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D",
      price: 49.99,
      title: "Ray Ban",
      description: "",
      category: "Sun Glass",
      carsouselImages: ["https://images.unsplash.com/photo-1634895855649-73701cfe7e48?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VuJTIwZ2xhc3N8ZW58MHx8MHx8fDA%3D"]
    },
  
    {
      id: "21",
      imageURL: "https://images.unsplash.com/photo-1495704907664-81f74a7efd9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      price: 7000,
      title: "Nelon Watch",
      description: "",
      category: "Watch",
      carsouselImages: ["https://plus.unsplash.com/premium_photo-1670537439541-d2eb20e1f6ce?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2h8ZW58MHx8MHx8fDA%3D", "https://images.unsplash.com/photo-1490915785914-0af2806c22b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGNofGVufDB8fDB8fHww"]
    },
  
    {
      id: "22",
      imageURL: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
      price: 4981,
      title: "Axios Watch",
      description: "",
      category: "Watch",
      carsouselImages: ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1444881421460-d838c3b98f95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww"
      ]
    },
  
  
    {
      id: "23",
      imageURL: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNofGVufDB8fDB8fHww",
      price: 5500,
      title: "Rolex",
      description: "",
      category: "Watch",
      carsouselImages: ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1444881421460-d838c3b98f95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww"
      ]
    },
  
    {
      id: "24",
      imageURL: "https://images.unsplash.com/photo-1517463700628-5103184eac47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdhdGNofGVufDB8fDB8fHww",
      price: 6000,
      title: "Quantum Lovin",
      description: "Well this is State-of-Art in Watch making History",
      category: "Watch",
      carsouselImages: ["https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1444881421460-d838c3b98f95?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGNofGVufDB8fDB8fHww"
      ]
    },
  ];
  