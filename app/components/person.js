import Image from "next/image";

export function Person() {
  return (
    <div className="shadow-md bg-white rounded-sm">
      <Image
        src="/history/3.jpg"
        width={390}
        height={390}
        className="rounded-sm"
      />
      <div className="p-4">
        <h3 className="font-semibold text-xl -mb-2">Gustav Wenemark</h3>
        <p className="text-sm -mb-3">SOF-General</p>
        <p className="text-sm">
          <a href="#">general@sof23.se</a>
        </p>
      </div>
    </div>
  );
}
