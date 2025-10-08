import Image from "next/image";
import Title from "@/components/global/Title"

export default function Home() {
  return (
    <div className="w-full h-full">
      <main className="relative w-full h-full">
        <Title/>
        main
        길게
        <div className="w-full h-[200vh] bg-gradient-to-b from-blue-100 to-blue-300">
        </div>
      </main>
      <footer className="">
     </footer>
    </div>
  );
}
