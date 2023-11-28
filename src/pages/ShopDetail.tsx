import { FcPhoneAndroid } from "react-icons/fc";
import { GiPositionMarker } from "react-icons/gi";
import { MdAccessTime } from "react-icons/md";
import { TbPigMoney } from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import { shops } from "../data";
export function ShopDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const shop = shops.find((item) => String(item.id) === id);
  if (!shop) navigate(`/`);

  const handlePhone = (phone: string) => {
    const phoneLink = `tel:${phone}`;
    window.location.href = phoneLink;
  };

  return (
    <Layout>
      <div className="bg-whiteh-full gap-2 flex flex-col overflow-auto no-scrollbar p-4 text-@textlable text-sm ">
        <div>
          <img
            src={`/${shop?.img ?? "default.jpg"}`}
            className="w-full h-[200px] object-fill  rounded shadow-2xl  shadow-blue-500/50 "
          />
        </div>

        <div className="flex justify-center items-center font-bold text-2xl p-1 ">
          <span className="text-black">{shop?.name}</span>
        </div>
        <div className="flex flex-col gap-2 ">
          <div className="flex gap-2 items-center">
            <TbPigMoney />
            <span className="font-bold text-xl text-black">
              通过联盟商家过来享受优惠福利:
            </span>
          </div>
          <div className="flex gap-1 flex-col">
            {shop?.discount.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <MdAccessTime />
          <span className="flex-1">{shop?.time ?? "24小时开放"}</span>
        </div>

        <div className="flex items-center gap-2">
          <GiPositionMarker />
          <span>{shop?.address}</span>
        </div>

        {shop?.phone.map((phone) => {
          return (
            <div
              key={phone}
              className="flex items-center gap-2 "
              onClick={() => handlePhone(phone)}
            >
              <FcPhoneAndroid />
              <span>{phone}</span>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
