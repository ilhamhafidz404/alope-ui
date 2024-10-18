import { useEffect, useState } from "react";
import { Button } from "../Button";
import "./../assets/style.css";

interface HeaderAction {
  placeholder: string;
  to: string;
  buttonColor: "primary" | "secondary" | "success" | "error" | "light" | "dark";
}

type HeaderProps = {
  bgUrls: string[];
  logoUrl?: string;
  title: string;
  description: string;
  actions?: HeaderAction[];
};

export default function Header({
  bgUrls,
  logoUrl,
  title,
  description,
  actions,
}: HeaderProps) {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (bgUrls.length === 0) return;

    const intervalId = setInterval(() => {
      setIsTransitioning(true); // Mulai transisi
      setTimeout(() => {
        setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgUrls.length);
        setIsTransitioning(false); // Akhiri transisi setelah gambar berganti
      }, 200); // Waktu untuk transisi animasi (misalnya 0.5 detik)
    }, 5000); // Mengganti gambar setiap 3 detik

    return () => clearInterval(intervalId);
  }, [bgUrls]);

  return (
    <header
      className={`min-h-[800px] max-h-screen min-w-screen relative bg-cover bg-center flex items-center justify-center text-white after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-b after:to-black/80 after:from-black/40 overflow-hidden`}
    >
      <img
        src={bgUrls[currentBgIndex]}
        className={`absolute w-full h-full object-cover object-center transition-opacity duration-500 ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
        alt="background"
      />
      <div className="relative z-20 text-center md:w-1/2 w-full px-5">
        {logoUrl && (
          <img
            src={logoUrl}
            alt="logo"
            width={200}
            className="md:size-44 size-28 mx-auto mb-10"
          />
        )}
        <h1 className="md:text-4xl text-3xl font-semibold">{title}</h1>
        <p className="mt-5 text-gray-200 md:text-base text-sm">{description}</p>
        <div className="md:flex inline-flex gap-3 md:flex-row flex-col items-center justify-center mt-10">
          {actions?.length &&
            actions.map((action) => (
              <Button
                key={action.placeholder}
                color={action.buttonColor}
                text={action.placeholder}
              />
            ))}
        </div>
      </div>
    </header>
  );
}
