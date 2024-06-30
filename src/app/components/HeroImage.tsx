import Image from "next/image";

export default function HeroImage() {
  return (
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
  )
}
