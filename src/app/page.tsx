"use client";

import { Button } from "appscrip-designkit";
import Link from "next/link";

export default function Home() {
  const pages = [
    {
      name: "Atoms",
      path: "/atoms",
    },
    {
      name: "Molecules",
      path: "/molecules",
    },
    {
      name: "Components",
      path: "/components",
    },
  ];
  return (
    <div className="w-full flex items-center justify-center mt-20">
      <ul className="flex flex-col gap-4">
        {pages?.map((page) => (
          <Button variant="outline" key={page.name}>
            <Link href={page.path}>{page.name}</Link>
          </Button>
        ))}
      </ul>
    </div>
  );
}
