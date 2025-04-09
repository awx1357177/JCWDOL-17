/** @format */

import { ComponentA, ComponentB, ComponentC } from "../components";

export default function Home() {
  return (
    <div>
      abc
      <ComponentA />
      <ComponentB />
      <ComponentC nama_component="ini component C" />
      <ComponentC nama_component="ini component D" />
      <ComponentC nama_component="ini component E" prop2="ini optional" />
    </div>
  );
}
