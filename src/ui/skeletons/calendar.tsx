import stlyes from "./styles.module.css";
export function CalendarTableSkeleton() {
  const array = Array(30).fill(undefined);
  return (
    <>
      {array.map((_, index) => (
        <div key={index} className={stlyes.daySkeleton}></div>
      ))}
    </>
  );
}
