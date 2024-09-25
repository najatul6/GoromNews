import Marquee from "react-fast-marquee"

const BreakingNews = () => {
  return (
    <div className="flex gap-2 justify-center items-center p-4 bg-[#F3F3F3]">
        <p className="py-2 px-3 bg-light-blue text-white text-xl font-bold">Latest</p>
        <Marquee className="font-bold uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus facilis corrupti aliquam, quae unde laborum rerum aliquid quia cumque esse voluptate voluptatum sapiente quaerat quod consectetur a, voluptates quibusdam obcaecati. Facere eveniet atque voluptate officia, reiciendis perspiciatis omnis repellat itaque distinctio corporis consequuntur, placeat natus ad? Ducimus, culpa provident?
        </Marquee>
    </div>
  )
}

export default BreakingNews