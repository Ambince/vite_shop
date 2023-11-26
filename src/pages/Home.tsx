import { Layout } from "../components/Layout";
import { ShopListView } from "../components/ShopListView";
import { SwiperHeader } from "../components/SwiperHeader";

export function Home() {
  return (
    <Layout>
      <SwiperHeader />
      <ShopListView />
    </Layout>
  );
}
