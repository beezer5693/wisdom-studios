import Container from "./components/Container"
import smBlueStar from "../../public/images/sm-blue-star.png"
import lgBlueStar from "../../public/images/lg-blue-star.png"
import Image from "next/image"
import Carousel from "./components/Carousel"
import Link from "next/link"

export default function Home() {
    return (
        <section className="h-full max-h-[781px] relative mx-auto overflow-hidden">
            <div className="bg-[#ffe1c2]">
                <Container className="flex flex-col relative items-center justify-center">
                    <div className="absolute top-[6.5rem] left-2 md:top-[13.75rem] md:left-16">
                        <Image
                            className="hidden md:block"
                            src={smBlueStar}
                            alt="small blue star"
                            height={50}
                            width={50}
                        />
                        <Image
                            className="md:hidden"
                            src={smBlueStar}
                            alt="small blue star"
                            height={35}
                            width={35}
                        />
                    </div>
                    <div className="absolute top-[7.75rem] left-6 md:top-[15.75rem] md:left-20">
                        <Image
                            className="hidden md:block"
                            src={lgBlueStar}
                            alt="small blue star"
                            height={70}
                            width={70}
                        />
                        <Image
                            className="md:hidden"
                            src={smBlueStar}
                            alt="small blue star"
                            height={45}
                            width={45}
                        />
                    </div>
                    <div className="w-full flex justify-center mt-5 header">
                        <h1 className="font-syne font-extrabold tracking-wide uppercase">
                            Wisdom <br /> Studios
                        </h1>
                    </div>
                    <div className="flex -mt-6 items-center w-full">
                        <div className="md:w-[55%] md:text-left text-center w-full md:ml-16 relative text-2xl leading-6 px-10 md:px-24 font-extralight flex flex-col items-center justify-center py-20 md:py-40">
                            <div>
                                <div>
                                    Our studio is currently
                                    <br /> undergoing a facelift.
                                </div>
                                <div className="mt-5">
                                    We will be back up <br /> and running shortly.
                                </div>
                                <div className="mt-6 relative max-w-max mx-auto md:mx-0">
                                    <div className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-black "></div>
                                    <button className="text-sm hover:translate-x-[3px] transition duration-300 ease-in-out hover:translate-y-[3px] relative border bg-[#ffe1c2] hover:bg-white py-2 px-6 font-medium border-black">
                                        <Link href={"mailto:nikki@wisdomstudios.co"}>
                                            get in touch
                                        </Link>
                                    </button>
                                </div>
                            </div>
                            <div className="absolute bottom-8 right-10 md:bottom-16 md:right-20">
                                <Image
                                    className="hidden md:block"
                                    src={lgBlueStar}
                                    alt="small blue star"
                                    height={80}
                                    width={80}
                                />
                                <Image
                                    className="md:hidden"
                                    src={lgBlueStar}
                                    alt="small blue star"
                                    height={60}
                                    width={60}
                                />
                            </div>
                        </div>
                        <div className="flex-1 hidden relative self-stretch md:flex justify-end">
                            <div className="w-[95%] bg-gradient-to-t from-[#649cd0] to-[#df96bb] border-x border-t border-black rounded-t-full"></div>
                            <div className="absolute top-[3.1rem] left-10">
                                <Image
                                    src={smBlueStar}
                                    alt="small blue star"
                                    height={48}
                                    width={48}
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="py-8 border-t border-black">
                <Carousel />
            </div>
        </section>
    )
}
