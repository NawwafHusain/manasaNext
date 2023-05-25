import LatestCourses from "@components/LatestCourses";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen gradient">
      <section className="flex sm:justify-center sm:flex-row flex-col justify-center align-middle w-screen">
        <div className="self-center sm:mt-0 mt-5">
          <h1 className="text-white sm:mb-5 sm:text-[3vw] mb-5 text-[5vw] sm:self-center self-start sm:text-left text-center font-extrabold">
            Maazza Al Magthob
          </h1>
          <p className="sm:w-[40vw] pl-[10vw] pr-[10vw] sm:text-[1.5vw] sm:p-0 text-[3vw] text-center sm:text-left text-white m-0">
            Aliquip esse ex mollit ea mollit aliquip anim aute ex ad ad esse
            eiusmod. Elit laborum deserunt reprehenderit exercitation. Officia
            velit elit laboris est laboris amet aute qui. Deserunt adipisicing
            anim consectetur ad consequat ex est cupidatat quis officia ut
            pariatur nulla. Nisi do deserunt excepteur cillum ullamco eiusmod
            exercitation eu amet magna sit proident.
          </p>
          <div className="flex flex-row mt-3 gap-5 sm:self-start self-center justify-center sm:justify-start">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCk1O913biJXMe6KWbBbOnng"
            >
              <div className="sm:w-max w-[40vw] sm:text-[1.2vw] bg-green-300 rounded-3xl flex justify-center align-middle gap-1 p-2 pl-5 pr-5">
                <Image
                  src="/assets/imgs/youtube.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p>Youtube</p>
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/maazzaa.almagthob/"
            >
              <div className="sm:w-max w-[40vw] sm:text-[1.2vw] bg-green-300 rounded-3xl flex justify-center align-middle gap-1 p-2 pl-5 pr-5">
                <Image
                  src="/assets/imgs/instagram.png"
                  alt="profile"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <p>Instagram</p>
              </div>
            </a>
          </div>
        </div>
        <Image
          src="/assets/imgs/DSC07390.png"
          alt="Maazza Al Maghtob"
          width={1000}
          height={1000}
          className="object-fit sm:w-[35vw] align-middle self-center w-[100vw]"
        />
      </section>
      <LatestCourses />
    </div>
  );
}
