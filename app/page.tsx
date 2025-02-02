import PageHeader from "./components/PageHeader";

export default function Home() {
  return (
    <div className="">
      <PageHeader />
      {Array(100)
        .fill(0)
        .map((_val, index) => {
          return <div key={index}>{index}</div>;
        })}
    </div>
  );
}
