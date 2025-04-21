import Image from "next/image";
import FeatureCard from "./components/FeatureCard";
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/data.json', 'utf8');
  const data = JSON.parse(file);

  interface Card {
    title: string, 

  }
  
  return (
    <div className="max-w-[1200px] m-auto grid items-center gap-12 justify-items-center p-4 md:p-8 pb-20 sm:p-20 font-[family-name:var(--font-noto-sans)]">
      <section className="intro-copy-container flex flex-col items-center gap-4">
        <h1 className="intro-subhead text-indigo-700 text-center font-semibold">Premium Abstract Images</h1>
        <h2 className="intro-heading text-center text-3xl md:text-5xl font-semibold">Easy Access to Top Quality Images</h2>
        <p className="intro-copy text-center max-w-[52ch] text-neutral-600">In a world where storytelling constantly evolves,
           we lead with groundbreaking images designed for your presentation excellence.</p>
      </section>
      <section className="feature-grid-container grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {data.map((card: Card) => (
          
          <FeatureCard {...card} key={card.title} />
        ))}
      </section>
    </div>
  );
}
