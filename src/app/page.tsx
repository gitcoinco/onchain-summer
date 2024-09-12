import Image from "next/image";
import { Leaderboard } from "../components/Leaderboard";
import { QueryableLeaderboard } from "@/components/QueryableLeaderboard";

export default function Home() {
  return (
    <section className="">
    
    
      <QueryableLeaderboard />
      </section>
    
  );
}
