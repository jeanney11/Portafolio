import React from "react";
import "../MyWork/myWork.css";

function MyWork() {
  return (
    <div className="bodyWorks">
      <div class="wrapperTitle">
        <h1 className="TitleHead">MY WORKS</h1>
      </div>

      <div className="containerWork">
        {
          <ul className="thumbnails">
            <li>
              <a href="#slide1">
                <img src="https://picsum.photos/1024/768?image=1033" />
              </a>
            </li>
            <li>
              <a href="#slide2">
                <img src="https://picsum.photos/1024/768?image=967" />
              </a>
            </li>
            <li>
              <a href="#slide3">
                <img src="https://picsum.photos/1024/768?image=924" />
              </a>
            </li>
            <li>
              <a href="#slide4">
                <img src="https://picsum.photos/1024/768?image=1073" />
              </a>
            </li>
            <li>
              <a href="#slide5">
                <img src="https://picsum.photos/1024/768?image=1032" />
              </a>
            </li>
          </ul>
        }

        <ul className="slidesWork">
          <li id="slide1">
            <div className="test_box box-01 col-xs-6 col-md-4">
              <div className="inner">
                <a href="#" className="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Title</h1>
                    <span className="test_link">Link</span>
                  </div>
                </a>
              </div>
            </div>
            {/* <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw1.jpg" alt="" /> */}
          </li>
          <li id="slide2">
            <div className="test_box box-02 col-xs-6 col-md-4">
              <div className="inner">
                <a href="#" class="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Title</h1>
                    <span className="test_link">Link</span>
                  </div>
                </a>
              </div>
            </div>
            {/* <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw2.jpg" alt="" /> */}
          </li>
          <li id="slide3">
            <div className="test_box box-03 col-xs-6 col-md-4">
              <div className="inner">
                <a href="#" class="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Title</h1>
                    <span className="test_link">Link</span>
                  </div>
                </a>
              </div>
            </div>
            {/* <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" alt="" /> */}
          </li>
          <li id="slide4">
            <div className="test_box box-04 col-xs-6 col-md-4">
              <div className="inner">
                <a href="#" class="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Title</h1>
                    <span className="test_link">Link</span>
                  </div>
                </a>
              </div>
            </div>
            {/* <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" alt="" /> */}
          </li>
          <li id="slide5">
            <div className="test_box box-05 col-xs-6 col-md-4">
              <div className="inner">
                <a href="#" class="test_click">
                  <div className="flex_this">
                    <h1 className="test_title">Title</h1>
                    <span className="test_link">Link</span>
                  </div>
                </a>
              </div>
            </div>
            {/* <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw5.jpg" alt="" /> */}
          </li>
        </ul>

        {
          <ul className="thumbnails">
            <li>
              <a href="#slide1">
                <img src="https://picsum.photos/1024/768?image=1033" />
              </a>
            </li>
            <li>
              <a href="#slide2">
                <img src="https://picsum.photos/1024/768?image=967" />
              </a>
            </li>
            <li>
              <a href="#slide3">
                <img src="https://picsum.photos/1024/768?image=924" />
              </a>
            </li>
            <li>
              <a href="#slide4">
                <img src="https://picsum.photos/1024/768?image=1073" />
              </a>
            </li>
            <li>
              <a href="#slide5">
                <img src="https://picsum.photos/1024/768?image=1032" />
              </a>
            </li>
          </ul>
        }
      </div>
    </div>
  );
}

export default MyWork;
