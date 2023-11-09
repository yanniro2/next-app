"use client";
import React, { useState, useEffect } from "react";

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://654c523b77200d6ba858ba96.mockapi.io/api/v1/product",
        {
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const productsData: Product[] = await res.json();
      setProducts(productsData);
    };
    fetchData();
  }, []);

  const addProductToDatabase = async (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      product: { value: string };
      price: { value: string };
    };
    const product = target.product.value;
    const price = target.price.value;

    if (!product || !price) return;

    const newProduct: Product = {
      product,
      price,
    };

    const res = await fetch(
      "https://654c523b77200d6ba858ba96.mockapi.io/api/v1/product",
      {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (res.ok) {
      const newProductData: Product = await res.json();
      setProducts([...products, newProductData]);
    }
  };

  return (
    <main className="flex items-center justify-center p-5 flex-col  mx-auto gap-[1rem]">
      <h1 className="text-xl font-semibold">Production Warehouse</h1>

      <form
        onSubmit={addProductToDatabase}
        className="flex flex-col w-1/2 gap-[1rem]">
        <input
          type="text"
          name="product"
          placeholder="Enter Product name .."
          className="p-3 border border-gray-200 rounded w-full"
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Product price .."
          className="p-3 border border-gray-200 rounded w-full"
        />

        <button
          type="submit"
          className="text-white bg-blue-400 p-3 rounded drop-shadow-lg">
          Add Product
        </button>
      </form>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p>{product.product}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
