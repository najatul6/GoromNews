import AllCategory from "../../AllCategory/AllCategory"
import HotNews from "../../HotNews/HotNews"

const RightSide = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-xl font-bold">All Caterogy</h2>
        <AllCategory/>
      </div>
     <div className="my-5">
     <HotNews/>
     </div>
    </div>
  )
}

export default RightSide