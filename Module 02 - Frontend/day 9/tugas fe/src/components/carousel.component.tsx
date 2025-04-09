/** @format */

import React from "react";

export default function CarouselComponent() {
  return (
    <div className="carousel w-full h-96 max-w-screen-xl m-auto ">
      <div id="slide1" className="carousel-item relative w-full ">
        <img
          src="https://a-static.besthdwallpaper.com/sunrise-art-wallpaper-3554x1999-81329_53.jpg"
          className="w-full  object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.pinimg.com/originals/b5/aa/75/b5aa75f6d501b5c71e5ee7f622557c24.jpg"
          className="w-full  object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://wallup.net/wp-content/uploads/2019/09/196187-nature-landscape-road-sunset-mountain-hd-wallpaper.jpg"
          className="w-full  object-cover"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
