import { Lora } from "@next/font/google";
import Image from "next/image";

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
          Kårtegeordning
        </h2>
        <div className="px-4 py-2">
          <table>
            <tr>
                <th>Startnummer</th>
                <th>Namn</th>
                <th>Typ av bidrag</th>
            </tr>
            <tr>
                <td>1</td>
                <td>SOF-gamla-gamlingar</td>
                <td>Annat</td>
            </tr>
            <tr>
                <td>2</td>
                <td>LiTHe Blås</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>3</td>
                <td>SOF-nya-gamlingar</td>
                <td>Kårtege-bygge</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Glasblåsarna</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Röda Arméns Gosskör</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>6</td>
                <td>M-pire</td>
                <td>Kårtege-bygge</td>
            </tr>
            <tr>
                <td>7</td>
                <td>Ostgöta Nationskapell</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>8</td>
                <td>ab Kruthornen & Letta Gardet</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>9</td>
                <td>M-verkstan</td>
                <td>Kårtege-bygge</td>
            </tr>
            <tr>
                <td>10</td>
                <td>Allianceorchestret & Chalmersbaletten</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>11</td>
                <td>Alte Kamereren & Kamérbaletten</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>12</td>
                <td>Klassföräldrarna</td>
                <td>Kårtege-bygge</td>
            </tr>
            <tr>
                <td>13</td>
                <td>Humpsvakar & Rumpskakar</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>14</td>
                <td>Patriciabaletten</td>
                <td>Balett</td>
            </tr>
            <tr>
                <td>15</td>
                <td>Mistluren & Mistlåhren</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>16</td>
                <td>Munchen-Hoben</td>
                <td>Kårtege-bygge</td>
            </tr>
            <tr>
                <td>17</td>
                <td>Bleckhornen & Baletten</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>18</td>
                <td>Snösvänget & Sparketten</td>
                <td>Balkester</td>
            </tr>
            <tr>
                <td>19</td>
                <td>Bonnkapälle</td>
                <td>Annat</td>
            </tr>
          </table>

          <p className="italic">Senast uppdaterad 16 maj.</p>
        </div>
      </div>
    </div>
  );
}
