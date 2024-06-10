import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1>Home Page</h1>
      <h1>Welcome</h1>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">

        <Link href="/dashboard" >
          <div className="border-2 bg-red-600 text-white w-[100px] rounded-md px-2 py-1">
            Click Here
          </div>
        </Link>

      </div>

    </div >
  );
}
