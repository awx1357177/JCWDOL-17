/** @format */
// "use client";
// import { usePathname } from "next/navigation";
import CardComponent from "@/components/card.component";
import CardSkeleton from "@/components/skeleton/card.skeleton";
import { IProduct } from "@/interfaces/product.interface";
import { api } from "@/utils/axios";
import { Metadata } from "next";
import { title } from "process";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const res = await fetch(
    "http://localhost:2000/products?slug=" + params.slug,
    {
      next: {
        revalidate: 600,
      },
    }
  );
  const data = (await res.json()) as IProduct[];

  return {
    title: data[0].product_name,
    description: data[0].description,
    openGraph: {
      images: [data[0].img],
    },
  };
}
export default async function Page({ params }: Props) {
  const res = await fetch(
    "http://localhost:2000/products?slug=" + params.slug,
    {
      next: {
        revalidate: 600,
      },
    }
  );
  const data = (await res.json()) as IProduct[];

  // const res = await api.get("/products", {
  //   params: {
  //     slug: params.slug,
  //   },
  // });

  console.log(process.env.user, "ini env");
  console.log(process.env.NEXT_PUBLIC_USER, "ini env csr");

  // const { data } = res;
  // if (!data.length) throw new Error(`product ${params.slug} not found`);
  return (
    <center className="">
      <div className="max-w-screen-sm">
        <CardComponent {...data[0]} />
      </div>
    </center>
  );
}
