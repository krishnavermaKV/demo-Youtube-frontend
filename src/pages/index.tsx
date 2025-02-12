import Image from "next/image";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";
import { AppBar } from "@/components/AppBar";
import Page from "@/components/Page";

const inter = Inter({subsets: ['latin'] });

export default function Home() {
  return (
       <div>
         <Page></Page>
       </div>
  );
}
 