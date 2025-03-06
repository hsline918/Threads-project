import Layout from "../../layout/Layout";
import PageHeader from "../../layout/PageHeader";

// import Line from "../../layout/Line";
import Threads from "./threads";

export default function Analyze2() {
  return (
    <Layout>
      <div className="flex-1">
        <PageHeader title="串文分析" />
        <Line />

        <div className="mt-6">
          <Threads />
        </div>
      </div>
    </Layout>
  );
}
