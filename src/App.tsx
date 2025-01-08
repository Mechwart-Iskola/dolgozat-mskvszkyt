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
  const [SearchedProduct, SetSearchedProduct] = useState<
    ProductType | undefined
  >();

  useEffect(() => {
    ReadData();
  }, []);

  function ChangeSearchName(e: React.ChangeEvent<HTMLInputElement>) {
    SetSearchName(e.target.value);
  }

  function SearchByName() {
    Products.forEach((element) => {
      if (element.name.toLowerCase().startsWith(SearchName.toLowerCase())) {
        SetWarningMSG("");
        SetSearchedProduct(element);
        console.log("searched");
      }
    });
  }

  async function ReadData() {
    const data = await fetch("./products.json");
    const result = await data.json();
    SetProducts(result.products);
  }

  return (
    <div className="search-section">
      <input type="text" onChange={ChangeSearchName} />
      <button onClick={SearchByName}>Search</button>
      <h1>Product Information</h1>
      {SearchedProduct ? (
        <ProductCard product={SearchedProduct}></ProductCard>
      ) : (
        <></>
      )}
      <p className="error">{WarningMSG}</p>
    </div>
  );
}

export default App;
