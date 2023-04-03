// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value
      return (
        <div className="body-con">
          {showLeftNavbar ? (
            <div className="left-nav-con">
              <h1 className="nav-h1">Left Navbar Menu</h1>
              <ul className="items">
                <li className="li">Item 1</li>
                <li className="li">Item 2</li>
                <li className="li">Item 3</li>
                <li className="li">Item 4</li>
              </ul>
            </div>
          ) : null}

          {showContent ? (
            <div className="content-con">
              <h1 className="nav-h1">Content</h1>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-con">
              <h1 className="nav-h1">Right Navbar</h1>
              <div className="box-con">
                <p className="box">Ad 1</p>
                <p className="box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
