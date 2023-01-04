import { Inter } from "@next/font/google";

export default function Home() {
  return (
    <>
      <section className="bg-royal-purple text-royal-yellow">
        <div className="container mx-auto text-center py-32">
          <h1 className="text-8xl">Som vi har längat!</h1>
          <p>
            18 till 21 maj är det dags för nästa upplaga av Sveriges största
            Studentorkesterfestival.
          </p>
        </div>
      </section>

      <section className="container mx-auto bg-red-100 grid grid-cols-2">
        <div>
          <h2 className="text-4xl">Senaste nytt</h2>
          <p>
            18 till 21 maj är det dags för nästa upplaga av Sveriges största
            studentorkesterfestival.
          </p>
        </div>

        <div>
          <h2 className="text-4xl">Vad är SOF?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam distinctio ex rem! Sequi ipsa laborum dolores molestiae quaerat sed ex! Libero facilis, tenetur corporis nihil praesentium magni eum unde obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam distinctio ex rem! Sequi ipsa laborum dolores molestiae quaerat sed ex! Libero facilis, tenetur corporis nihil praesentium magni eum unde obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam distinctio ex rem! Sequi ipsa laborum dolores molestiae quaerat sed ex! Libero facilis, tenetur corporis nihil praesentium magni eum unde obcaecati.
          </p>
        </div>
      </section>
    </>
  );
}
