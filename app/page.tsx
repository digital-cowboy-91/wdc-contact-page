export default function Home() {
  return (
    <div>
      {Array(100)
        .fill(0)
        .map((_val, index) => {
          return <div key={index}>{index}</div>;
        })}
    </div>
  );
}
