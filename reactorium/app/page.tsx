import Image from "next/image";
import { ComponentA, ComponentB, ComponentC } from "./components";
export default function Home() {
  return( 
  <div>
    <ComponentA/>
    <ComponentB/>
    <ComponentC nama_component="ini optionalC"/>
    <ComponentC nama_component="ini component D" prop2="ini optional"/>
  </div>
  );
}