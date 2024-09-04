export default function Card() {
  return (
    <div className="max-w-[400px] shadow-2xl px-5 py-3 pb-7 rounded-md">
      <div>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt=""
          className="rounded-md w-ful"
        />
      </div>
      <div className="mt-4 text-left">
        <h5 className="text-xl font-semibold">Card Title</h5>
        <p className="mt-2 text-sm text-gray-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur nulla repellat ipsa vel odio.
        </p>
      </div>
    </div>
  );
}
