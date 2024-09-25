import moment from "moment"

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center pb-4">
        <img src="/GoromNews.png" alt="gorom News" className="h-32" />
     <p className="my-2">Reporting Truth Without Bias or Boundaries.</p>
     <p className="text-xl font-bold">{moment().format("dddd, MMMM D,YYYY")}</p>
    </div>
  )
}

export default Header