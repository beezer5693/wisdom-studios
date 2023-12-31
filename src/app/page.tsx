import Container from "./components/Container"
import smBlueStar from "../../public/images/sm-blue-star.png"
import lgBlueStar from "../../public/images/lg-blue-star.png"
import Image from "next/image"
import Carousel from "./components/Carousel"
import Link from "next/link"

export default function Home() {
  return (
    <section className="min-h-screen mx-auto bg-[#ffe1c2]">
      <Container>
        <div className="w-full flex mt-5 justify-center">
          <h1 className="font-syne uppercase header tracking-tight font-extrabold inline-flex flex-col">
            <span>wisdom</span>
            <span>studios</span>
          </h1>
        </div>
        <div className="w-full flex flex-col relative">
          <div className="w-full flex justify-center md:justify-start relative z-20 pt-60 pb-32 lg:py-[16rem] md:pl-20 lg:pl-20 xl:pl-52 2xl:pl-72">
            <p className="inline-flex flex-col gap-10 text-3xl sm:text-4xl md:text-5xl font-light">
              {" "}
              <span>
                Our studio is currently <br /> undergoing a face lift.
              </span>
              <span>
                We will be back up and <br /> running shortly.
              </span>
              <span>
                Need to get in touch? <br />{" "}
                <Link href="mailto:nikki@wisdomstudios.co">
                  <span className="font-medium hover:underline hover:underline-offset-2 cursor-pointer">
                    Click here.
                  </span>
                </Link>
              </span>
            </p>
            <div className="absolute top-7 left-20">
              <Image src={smBlueStar} alt="small blue star" className="h-24 w-24" />
            </div>
            <div className="absolute top-[4.45rem] left-28">
              <Image src={lgBlueStar} alt="small blue star" className="h-40 w-40" />
            </div>
          </div>
          <div className="absolute right-0 bottom-0 border-black bg-gradient-to-t from-[#559dd4] to-[#ec92bc] border-x border-t z-10 h-[101%] md:h-[103%] lg:h-[105%] rounded-t-full w-full md:w-2/3 lg:w-2/5">
            <div className="relative h-full w-full rounded-t-full">
              <div className="absolute top-20 left-7">
                <Image src={smBlueStar} alt="small blue star" className="h-24 w-24" />
              </div>
              <div className="absolute bottom-28 -left-48">
                <Image src={lgBlueStar} alt="small blue star" className="h-36 w-36" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 bg-gradient-to-r from-[#ff7caa] from-[20%] border-t border-black">
          <Carousel />
        </div>
      </Container>
    </section>
  )
}
