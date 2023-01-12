import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function FragorSvar() {
  return (
    <div className="container mx-auto mb-8 shadow-md bg-white rounded-sm mt-8">
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
  );
}
