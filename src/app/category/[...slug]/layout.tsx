import React from "react"
import { getCategorySlugs } from "@/components/Hook/slugHook";

export function generateStaticParams() {
  const slugs = getCategorySlugs();
  
  console.log("\nAll category Slugs : ", slugs);

  return slugs;
}

type categoryLayoutProps = {
  children: React.ReactNode;
  params: Promise<{slug : string[]}>
}

export default async function categoryLayout(props: categoryLayoutProps) {
  const slug = (await props.params).slug.map(segment => decodeURIComponent(decodeURIComponent(segment)))
  
  return (
    <div>
        {props.children}
    </div>
  )
}