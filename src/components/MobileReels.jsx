function MobileReels({ items }) {
  return (
    <div className="px-5 pt-32 pb-20 space-y-8">

      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.03]"
        >

          <video
            src={item.video}
            controls
            playsInline
            preload="metadata"
            className="w-full h-[500px] object-cover"
          />

          <div className="p-5">

            <h2 className="text-2xl font-bold">
              {item.title}
            </h2>

            <p className="text-zinc-400 mt-2">
              {item.description}
            </p>

          </div>

        </div>
      ))}

    </div>
  );
}

export default MobileReels;