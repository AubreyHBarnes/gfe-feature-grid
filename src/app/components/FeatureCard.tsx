import Image from "next/image";


export default function FeatureCard(card: object) {
    return (
        <div key={card.title} className="feature-card flex flex-col gap-3 items-center max-w-[52ch]">
            <Image
              src={card.icon}
              alt=""
              width={50}
              height={50}
              className=""
            />
            <h3 className="font-semibold text-center">{card.title}</h3>
            <p className="text-center text-neutral-600">{card.body}</p>
          </div>
    );
}