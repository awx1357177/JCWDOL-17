/** @format */
"use client";
import { usePathname } from "next/navigation";
import CardComponent from "@/components/card.component";
import { IProduct } from "@/interfaces/product.interface";
import { api } from "@/utils/axios";
import React, { useEffect, useMemo, useState } from "react";
import CardSkeleton from "@/components/skeleton/card.skeleton";

export default function Page() {
  const path = usePathname().split("/"); // /csr/product/new-balance-530-ivory -> ['',csr,product,new-balance-530-ivory]
  const slug = path[path.length - 1]; //new-balance-530-ivory
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get("/products", {
          params: {
            slug,
          },
        });
        if (res.data.length) setProduct(res.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    if (slug) fetch();
  }, [slug]);

  // const p = useMemo(() => {
  //   const fetch = async () => {
  //     try {
  //       const res = await api.get("/products", {
  //         params: {
  //           slug,
  //         },
  //       });
  //       if (res.data.length) return res.data[0];
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   if (slug) return fetch().then((d) => d);
  // }, [slug]);

  console.log(process.env.NEXT_PUBLIC_USER, "ini env csr");

  // product.then((data) => console.log(data)); tampilan product menggunakan useMemo

  return (
    <center className="">
      <div className="max-w-screen-sm">
        {product ? <CardComponent {...product} /> : <CardSkeleton />}
      </div>
    </center>
  );
}

//async function => await promise
