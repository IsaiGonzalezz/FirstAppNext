import Image from "next/image";
//import styles from "./page.module.css";
import styles from "@/styles/index.module.css"
 
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-screen bg-black">
      <h1 className="text-3xl font-bold mb-4 text-purple-500" style={{ filter: 'brightness(150%)' }}>isai gonzalez</h1>
       <div className="mt-16 w-full flex justify-center">
         <div className="w-3/5 flex justify-center items-center">
         </div>
       </div>
    </main>
  );
}