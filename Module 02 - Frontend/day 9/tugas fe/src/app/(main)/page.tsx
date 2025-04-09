/** @format */
"use client";
import { useEffect, useState } from "react";

import { IProduct } from "@/interfaces/product.interface";
import { api } from "@/utils/axios";
import CardComponent from "@/components/card.component";
import CarouselComponent from "@/components/carousel.component";

// tugas jcwdol17
// lanjutkan dari project berikut
// user dapat menambahkan barang dan menghitung total harga dikeranjang
// user dapat melakukan filtering terhadap product
// user dapat melakukan CRUD(create read update delete) kepada product
// implementasikan maping array kepada component yg dapat dipisahkan
// gunakan usecontext untuk searching
// gunakan redux untuk add to cart
// gunakan hooks yang mendukung pembuatan project
// student diperbolehkan melakukan perubahan style,design,menambah page dll

export default function Home() {
  const [products, setProducts] = useState<Array<IProduct>>([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {
        throw error;
      }
    };
    fetch();
  }, []);
  return (
    <div className="flex flex-col items-center gap-7">
      <CarouselComponent />

      <div className="grid grid-cols-5 max-w-screen-xl gap-2">
        {products.map((product, key) => (
          <CardComponent {...product} key={key} />
        ))}
      </div>
    </div>
  );
}
