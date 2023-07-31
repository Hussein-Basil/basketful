import { useState, useEffect } from "react";
import useSWR from "swr";

const useGetProducts = () => {
  const [products, setProducts] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log('hello', data)
        setProducts(data.products)
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);

  return { products, isLoading };
};

export default useGetProducts;
