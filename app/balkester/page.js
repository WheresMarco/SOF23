import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  weights: [400, 700],
});

export default function Balkester() {
  return (
    <div className="px-2 md:px-0">
      <div className="md:container mx-auto shadow-md bg-white rounded-sm my-4 md:my-8">
        <h2
          className={`${lora.className} text-3xl text-royal-yellow bg-wallpaper p-3 rounded-t-sm font-semibold mb-2`}
        >
          Balkester
        </h2>
        <div className="px-4 py-2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non autem
            hoc: igitur ne illud quidem. Quid est enim aliud esse versutum? Quod
            non faceret, si in voluptate summum bonum poneret.{" "}
            <b>Nihil sane.</b> <i>Quis istud possit, inquit, negare?</i>{" "}
            <i>Duo Reges: constructio interrete.</i>{" "}
            <a href="http://loripsum.net/" target="_blank">
              Sit hoc ultimum bonorum, quod nunc a me defenditur;
            </a>{" "}
          </p>

          <p>
            Multoque hoc melius nos veriusque quam Stoici. Videamus animi
            partes, quarum est conspectus illustrior; Graccho, eius fere,
            aequalí? Non igitur bene. Maximus dolor, inquit, brevis est.{" "}
            <a href="http://loripsum.net/" target="_blank">
              Sed ego in hoc resisto;
            </a>{" "}
          </p>

          <p>
            Sed ad illum redeo. <b>Quid iudicant sensus?</b> Sin aliud quid
            voles, postea. Quibusnam praeteritis?{" "}
          </p>

          <p>
            Sed residamus, inquit, si placet. Respondent extrema primis, media
            utrisque, omnia omnibus. Videmus igitur ut conquiescere ne infantes
            quidem possint. Quaerimus enim finem bonorum. Stoici scilicet.
            Idemne, quod iucunde? Ita ne hoc quidem modo paria peccata sunt. At,
            illa, ut vobis placet, partem quandam tuetur, reliquam deserit.{" "}
          </p>

          <ul>
            <li>Teneo, inquit, finem illi videri nihil dolere.</li>
            <li>
              Theophrastus mediocriterne delectat, cum tractat locos ab
              Aristotele ante tractatos?
            </li>
            <li>Tum mihi Piso: Quid ergo?</li>
            <li>
              Placet igitur tibi, Cato, cum res sumpseris non concessas, ex
              illis efficere, quod velis?
            </li>
            <li>
              Praeclare Laelius, et recte sofñw, illudque vere: O Publi, o
              gurges, Galloni! es homo miser, inquit.
            </li>
            <li>
              Quod cum accidisset ut alter alterum necopinato videremus,
              surrexit statim.
            </li>
          </ul>

          <p>
            <b>Quo tandem modo?</b> Sed ne, dum huic obsequor, vobis molestus
            sim. Quae diligentissime contra Aristonem dicuntur a Chryippo.
            Itaque his sapiens semper vacabit.{" "}
          </p>

          <p>
            Sed haec omittamus; Ne in odium veniam, si amicum destitero tueri.
            Satis est ad hoc responsum. Age, inquies, ista parva sunt.{" "}
          </p>

          <p>
            Hunc vos beatum; Si longus, levis. Inde igitur, inquit, ordiendum
            est. Quare conare, quaeso. Summae mihi videtur inscitiae.{" "}
            <a href="http://loripsum.net/" target="_blank">
              Is es profecto tu.
            </a>{" "}
            Aperiendum est igitur, quid sit voluptas;{" "}
          </p>

          <p>
            Illud non continuo, ut aeque incontentae. Cur post Tarentum ad
            Archytam? <b>Cave putes quicquam esse verius.</b>{" "}
            <i>Nihilo magis.</i> Facillimum id quidem est, inquam. Praeclarae
            mortes sunt imperatoriae;{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
