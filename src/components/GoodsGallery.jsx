import GoodsCard from "./GoodsCard";

function GoodsGallery() {
    const products = [
      {
        id: 1,
        image: "/img/products/carrot.jpg",
        name: "Carrot",
        price: 15.50,
      },
      {
        id: 2,
        image: "/img/products/broccoli.jpg",
        name: "Broccoli",
        price: 42.00,
      },
      {
        id: 3,
        image: "/img/products/eggplant.jpg",
        name: "Eggplant",
        price: 78.30,
      },
      {
        id: 4,
        image: "/img/products/zucchini.jpg",
        name: "Zucchini",
        price: 23.75,
      },
      {
        id: 5,
        image: "/img/products/kale.jpg",
        name: "Kale",
        price: 99.99,
      },
      {
        id: 6,
        
        image: "/img/products/radish.jpg",
        name: "Radish",
        price: 12.40,
      },
    ];
  
    return (
      <div className="goods-gallery">
        {products.map((product) => (
          <GoodsCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    );
  }
  
  export default GoodsGallery;