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
      imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%201.jpg?alt=media&token=45736a06-4922-48a7-a0ef-b389cb66a980",
      price: 8000,
      title: "Armani",
      description: "Amazing trousers from turkey.Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
      category: "Trouser",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%202.jpg?alt=media&token=80a49bbe-5d4d-44fd-a016-a3583bb82126","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%201.jpg?alt=media&token=45736a06-4922-48a7-a0ef-b389cb66a980"]
    },

    {
      id: "2",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%203.jpg?alt=media&token=a178b0f3-4733-4376-9ec6-eef16cb150b6",
      price: 9000,
      title: "Marshal",
      description: "High Quality Turkey Trousers for you",
      category: "Trouser",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%204.jpg?alt=media&token=4822a5f3-6d6b-4564-aa37-55a4da605951","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/men%20trouser%203.jpg?alt=media&token=a178b0f3-4733-4376-9ec6-eef16cb150b6"]
    },

    {
      id: "3",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/rebook.jpg?alt=media&token=af27ff38-deb9-4784-ba15-76172a1a2c13",
      price: 16500,
      title: "Rebook",
      description: "Reebok comfort shoe",
      category: "Shoe",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/rebook%202.jpg?alt=media&token=d4af770a-ce7c-4ad7-927f-a975521d2ac4","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/rebook.jpg?alt=media&token=af27ff38-deb9-4784-ba15-76172a1a2c13"]
    },

    {
      id: "4",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%201.jpg?alt=media&token=a4c9b935-db09-4709-80dd-53a88a81bac5",
      price: 13000,
      title: "ALDO CHELSEA BOOTS",
      description: "High Quality Elegant Shoe",
      category: "Shoe",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%202.jpg?alt=media&token=1cc71115-9ae3-4664-bc33-de7649c2d3c3","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%201.jpg?alt=media&token=a4c9b935-db09-4709-80dd-53a88a81bac5","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shoe%203.jpg?alt=media&token=a2efa364-ebe1-4254-a64c-a417d3f9bf52"]
    },

    {
      id: "5",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%201.jpg?alt=media&token=4a4c54bd-83c8-48d3-abcb-303f0e2ba53e",
      price: 2800,
      title: "Ette",
      description: "Best Shirts in the town for you",
      category: "Shirt",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%203.jpg?alt=media&token=2bdaedda-1652-4715-8d9f-7e4ef98179ae","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%202.jpg?alt=media&token=4995c1d6-483c-40e3-a22b-9c7f5732ada2","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/shirt%201.jpg?alt=media&token=4a4c54bd-83c8-48d3-abcb-303f0e2ba53e"]
    },
 

    {
      id: "6",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b",
      price: 9000,
      title: "PRADA",
      description: "the best full cloth for you. Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
      category: "Full Cloth",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%202.jpg?alt=media&token=e09ed54f-af29-403f-8f84-f41ebe27c4ba","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b"]
    },
    {
      id: "8",
      imageURL:"https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%202.jpg?alt=media&token=e09ed54f-af29-403f-8f84-f41ebe27c4ba",
      price: 11000,
      title: "Linkon Sivo",
      description: "the best full cloth for you. Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
      category: "Full Cloth",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%202.jpg?alt=media&token=e09ed54f-af29-403f-8f84-f41ebe27c4ba","https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/flull%20cloth%201.jpg?alt=media&token=46b5e016-6072-4668-bf86-b1bc7fe0e38b"]
    },

    {
      id: "7",
      imageURL: "https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%20gucci.jpg?alt=media&token=086f2ec7-bfd9-44c7-a96b-f514d0f10aff",
      price: 9000,
      title: "GUCCI",
      description: "GUCCI for you. best full cloth in the town. Stylish and versatile trousers crafted for comfort and elegance. Perfect for casual outings or formal events, these trousers offer a tailored fit and premium fabric for a polished look. Available in various colors and sizes to suit your style.",
      category: "Full Cloth",
      carsouselImages: ["https://firebasestorage.googleapis.com/v0/b/temari-path---learn.appspot.com/o/full%20cloth%20gucci.jpg?alt=media&token=086f2ec7-bfd9-44c7-a96b-f514d0f10aff"]
    },


  ];
  