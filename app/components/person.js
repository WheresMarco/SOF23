import Image from "next/image";

export function Person(props) {
    console.log(props);
  return (
    <div className="shadow-md bg-white rounded-sm">
      <Image
        src={props.image}
        width={390}
        height={390}
        className="rounded-sm"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl -mb-2">{props.name}</h3>
        <p className="text-sm -mb-3">{props.title}</p>
        <p className="text-sm">
          <a href={`mailto:${props.email}`}>{props.email}</a>
        </p>
      </div>
    </div>
  );
}
