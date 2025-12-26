"use client";
import Image from "next/image";

const FrontBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Image
        src="/images/prashamsawallpaper.jpg"
        alt="Background Image"
        fill
        className=""
      />
    </div>
  );
};

export default FrontBackground;
