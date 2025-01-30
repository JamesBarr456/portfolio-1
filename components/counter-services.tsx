import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="mx-auto my-8 grid max-w-3xl grid-cols-2 justify-between gap-3 md:flex md:grid-cols-4 md:gap-6">
      {dataCounter.map(({ id, endCounter, text, lineRight, lineRightMobile }) => (
        <div key={id} className={`${lineRight && "ltr"}`}>
          <div
            className={`${lineRight && "border-2 border-transparent px-4 md:border-e-gray-100"} ${lineRightMobile && "border-e-gray-100"}`}
          >
            <p className="mb-2 flex text-2xl font-extrabold text-secondary md:text-4xl">
              + <CountUp end={endCounter} start={0} duration={5} />
            </p>
            <p className="max-w-[100px] text-xs uppercase">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterServices;
