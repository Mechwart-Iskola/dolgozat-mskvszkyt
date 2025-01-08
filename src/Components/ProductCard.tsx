import { ProductType } from "../App";

type ProductProps = {
  product: ProductType | undefined;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div className="product-card">
      <div className="product-info">
        <img
          className="product-image"
          src={product?.image}
          alt="product image"
        />
        <div className="product-details">
          <p>{product?.id}</p>
          <p>{product?.name}</p>
          <p>{product?.price}$</p>
          <p>{product?.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
