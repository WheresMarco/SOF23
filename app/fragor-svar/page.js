import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function FragorSvar() {
  return (
    <div className="px-2 xl:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Frågor & Svar
        </h2>
        <div className="px-4 py-2">
          <h3 className="text-xl mt-2">En fråga som jag har?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem
            hoc: igitur ne illud quidem. Quid est enim aliud esse versutum? Quod
            non faceret, si in voluptate summum bonum poneret.
          </p>

          <h3 className="text-xl mt-4">En fråga som jag har?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem
            hoc: igitur ne illud quidem. Quid est enim aliud esse versutum? Quod
            non faceret, si in voluptate summum bonum poneret.
          </p>

          <h3 className="text-xl mt-4">En fråga som jag har?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem
            hoc: igitur ne illud quidem. Quid est enim aliud esse versutum? Quod
            non faceret, si in voluptate summum bonum poneret.
          </p>

          <h3 className="text-xl mt-4">En fråga som jag har?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem
            hoc: igitur ne illud quidem. Quid est enim aliud esse versutum? Quod
            non faceret, si in voluptate summum bonum poneret.
          </p>

          <h3 className="text-xl mt-4">En fråga som jag har?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem
            hoc: igitur ne illud quidem. Quid est enim aliud esse versutum? Quod
            non faceret, si in voluptate summum bonum poneret.
          </p>
        </div>
      </div>
    </div>
  );
}
