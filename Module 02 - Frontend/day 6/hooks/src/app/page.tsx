/** @format */
"use client";

import { TestComponent } from "@/component/component";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(2);
  const [isNumberEven2, setIsNumberEven2] = useState<string>("");
  const renderCount = useRef<number>(0);
  const increment = useCallback(() => setCount(count + 1), [count]); //setCount(6)
  // click button => increment => setcount => waiting.... => nilai count berubah => useeffect triggered => arg1 => update dom.title
  useEffect(() => {
    document.title = `You Clicked ${count} times`;
    // alert(`You Clicked ${count} times`);
    setIsNumberEven2(count % 2 == 0 ? "even" : "odd");

    renderCount.current = count; // 0 -> waiting -> 2. next akan jadi 5. jadi 6
  }, [count]); //componentDidUpdate
  useEffect(() => {}); // componentWillMount tidak disarankan karena akan ke-triggered setiap ada perubahan state

  useEffect(() => {
    return () => {
      // alert("componentWillUnmount");
    };
  }, []);

  const inputRef = useRef<null | HTMLInputElement>(null);
  //inputref akan mewakilkan element bentuk input.

  useEffect(() => {
    setCount(5);
    inputRef.current?.focus();
  }, []); //componentDidMount

  const isNumberEven = useMemo(() => {
    return count % 2 == 0 ? "even" : "odd";
  }, [count]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <center>
        <h2 className="font-bold">You Clicked {count} times</h2>
        <button
          className="bg-red-300 rounded-md px-2 py-1 mt-2 font-semibold"
          onClick={increment}
        >
          Click Me
        </button>
        <TestComponent fn={increment} />
        <div> Number (state) : {isNumberEven2}</div>

        <div> Number : {isNumberEven}</div>

        <div>Render Count : {renderCount.current} times</div>

        <div>
          <input type="text" ref={inputRef} className="text-black" />
          <button
            className="bg-red-300 rounded-md px-2 py-1 mt-2 font-semibold"
            onClick={() => inputRef.current?.focus()}
          >
            Click Me
          </button>
        </div>
      </center>
    </div>
  );
}
//onclick => increment => setCount
// useState(0) => [state,setState] = [0,function untuk mengubah isi dari state] =>

//CRA (create react app) framework dari facebook untuk bisa pakai react
//vite framework (CSR)
//nextjs framework (CSR dan SSR)

// SSR = server side rendering (default nextjs)
// CSR = client side rendering
//untuk menggunakan hooks diwajibkan menggunakan CSR

//browser => html (dom)

//server => process(render) => html  => client(browser atau crawler)
//server => html (kosong) => client
//       => dom (update)  => process(render) => client

// crawler (search engine) => purwadhika.com
//                => keyword, title, content yang terdapat di dalam website (memanfaatkan headers di dalam html)

//componentWillMount
//componentDidMount
//componentDidUpdate
//componentWillUnMount

// html => javascript (dom) => update html
// html => javascript => component (javascript)  => update html
