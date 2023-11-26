import { FcPhoneAndroid } from "react-icons/fc";
import { MdAccessTime } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { shops } from "../data";
export function ShopListView() {
  const navigate = useNavigate();

  const onClickDetail = (id: any) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="flex  h-3/4   overflow-auto flex-col  items-center relative gap-4 px-[2px] no-scrollbar pb-2">
      {shops.map((item) => {
        return (
          <div
            onClick={() => onClickDetail(item.id)}
            key={item.name}
            className="flex text-@textlable  rounded p-[2px] items-center justify-start w-full gap-4 h-[140px] bg-white hover:cursor-pointer hover:opacity-70 "
          >
            <div className="w-[120px] h-[100px]">
              <img
                src={`/${item?.img ?? "default.jpg"}`}
                className="w-[120px] h-[100px] object-fill rounded "
              />
            </div>
            <div className="flex flex-col gap-[2px] justify-center">
              <span className="font-bold text-base text-gray-700">
                {item.name}
              </span>
              <div className="text-xs flex flex-col">
                {item.discount.slice(0, 1).map((discount) => {
                  return <span key={discount}>{discount}</span>;
                })}
              </div>

              <span className="text-xs">{item.address} </span>
              <span className="text-xs flex items-center gap-2 ">
                <MdAccessTime />
                <span className="flex-1">{item.time ?? "24小时"}</span>
              </span>
              <span className="text-xs flex items-center gap-2 ">
                <FcPhoneAndroid />
                {item.phone[0]}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
