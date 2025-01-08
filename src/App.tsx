import { useEffect, useState } from "react";
import "./App.css";
import ProductCard from "./Components/ProductCard";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string | null;
};

function App() {
  const [Products, SetProducts] = useState<ProductType[]>([]);

  const [WarningMSG, SetWarningMSG] = useState<string>("");
  const [SearchName, SetSearchName] = useState<string>("");
  const [SearchedProduct, SetSearchedProduct] = useState<ProductType>();

  useEffect(() => {
    ReadData();
  }, []);

  function ChangeSearchName(e: React.ChangeEvent<HTMLInputElement>) {
    SetSearchName(e.target.value);
  }

  function SearchByName() {
    if (Products.length == 0) {
      SetWarningMSG("No products found");
    } 
    else {
      Products.forEach((element) => {
        if (element.name.toLowerCase().startsWith(SearchName.toLowerCase())) {
         SetSearchedProduct(element)
         console.log("searched")
         return
        }
      });
    }
  }

  async function ReadData() {
    const data = await fetch("./products.json");
    const result = await data.json();
    SetProducts(result.products);
  }

  return (
    <div>
      <input className="search-section" type="text" onChange={ChangeSearchName} />
      <button onClick={SearchByName}>Search</button>
      <h1>Product Information</h1>
      <ProductCard {...SearchedProduct} ></ProductCard>
      <p className="error">{WarningMSG}</p>
    </div>
  );
}

export default App;
