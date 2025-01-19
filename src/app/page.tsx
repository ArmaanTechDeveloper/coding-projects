import Image from "next/image";
import { Button } from "./components/Button";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex justify-center flex-col items-center">
      <p className="text-5xl my-2">hi there 🚀!</p>
      <Button />
    </div>
  );
}
