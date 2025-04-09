/** @format */

export function ComponentA() {
  return (
    <div className="blue" id="componentA">
      component A
    </div>
  );
}

export function ComponentB() {
  return (
    <div
      style={{
        color: "rgb(255,100,0)",
        fontSize: "20px",
      }}
    >
      component B
    </div>
  );
}

export function ComponentC({
  nama_component,
  prop2,
}: {
  nama_component: string;
  prop2?: string;
}) {
  return (
    <div>
      {nama_component} {prop2}
    </div>
  );
}

//component.tsx => { componentA, componentB }
