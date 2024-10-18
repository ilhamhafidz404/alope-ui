import { ReactNode } from "react";

interface FooterLinks {
  to: string;
  placeholder: string | ReactNode;
}

type FooterProps = {
  imgUrlLogo?: string;
  text: string;
  bottomText?: string;
  links: FooterLinks[];
};

export default function Footer({
  imgUrlLogo,
  text,
  bottomText,
  links,
}: FooterProps) {
  return (
    <footer className="pt-10 bg-[#0e1317]">
      <div className="flex lg:flex-row flex-col justify-between items-center px-10 pb-10">
        <div className="flex lg:flex-row flex-col gap-5 items-center lg:mb-0 mb-10">
          {imgUrlLogo && <img src={imgUrlLogo} className="w-[50px]" alt="" />}
          <p className="text-xl font-semibold text-gray-200 lg:text-left text-center">
            {text}
          </p>
        </div>
        <div>
          <ul className="flex gap-1 items-center">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.to}
                  target="_blank"
                  className="text-white hover:bg-white/10 px-5 py-3 rounded-md block"
                >
                  {link.placeholder}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {bottomText && (
        <div className="bg-[#06090b] text-gray-300 py-4 px-10 flex items-center justify-center text-sm">
          <p>{bottomText}</p>
        </div>
      )}
    </footer>
  );
}
