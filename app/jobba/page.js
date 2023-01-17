import { Lora } from "@next/font/google";
import Image from "next/image";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Jobba() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Jobba på SOF
        </h2>
        <div className="px-4 py-2">
        <Image
            src="/history/2.jpg"
            width={300}
            height={300}
            alt="Bild från tidigare SOF"
            className="hidden md:block rounded-sm float-right pl-4 pb-4"
          />
          <p>
            För att få en så bra festival som möjligt kommer vi att behöva
            jobbare som kan hjälpa till under festivalhelgen. Mer information om
            det kommer, men är du intresserad redan nu att hjälpa till kan du
            maila <a href="mailto:personal@sof23.se">personal@sof23.se</a>.
          </p>

          <p className="italic">Senast uppdaterad 17 januari.</p>

          <br className="clear-both" />
        </div>
      </div>
    </div>
  );
}
