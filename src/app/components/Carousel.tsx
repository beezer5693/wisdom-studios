import Image from "next/image"
import blkStar from "../../../public/images/blk-star.png"

const Carousel = () => {
  return (
    <div className="flex items-center space-x-14 scroller flex-nowrap w-full">
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
      <div className="font-syne flex items-center font-bold text-5xl">
        <div className="whitespace-nowrap mr-5">Down for rebranding</div>
        <Image src={blkStar} alt="black star" height={40} width={40} />
      </div>
    </div>
  )
}

export default Carousel
