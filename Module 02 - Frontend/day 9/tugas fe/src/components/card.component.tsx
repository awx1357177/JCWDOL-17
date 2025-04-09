/** @format */

import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function CardComponent(product: IProduct) {
  return (
    <Link
      href={"/product/" + product.slug}
      className="card bg-base-100 w-full shadow-xl"
    >
      <figure>
        <img src={product.img} alt="Shoes" />
      </figure>
      <Image
        width={50}
        height={50}
        className="w-[640] h-[456]"
        src={product.img}
        alt="ini sepatu"
      />

      <div className="card-body">
        <h2 className="card-title">{product.product_name}</h2>
        <p>{product.description}</p>
        <b>${product.price}</b>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to Card</button>
        </div>
      </div>
    </Link>
  );
}
