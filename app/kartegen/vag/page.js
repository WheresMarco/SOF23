import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Festivalen() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container md:mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Kårtegens väg
        </h2>
        <div className="px-4 py-2">
          <p>Det här är vägen får Kårtegen för SOF23.</p>

          <iframe src="https://www.google.com/maps/d/embed?mid=1MUlLWANnBMb3DFiQaP7cjBwykb2rtbk&ehbc=2E312F" width="100%" height="600"></iframe>

          <p className="italic">Senast uppdaterad 2 maj.</p>
        </div>
      </div>
    </div>
  );
}
