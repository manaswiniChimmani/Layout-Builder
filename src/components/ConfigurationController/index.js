// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = () => {
        onToggleShowContent()
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="conf-cntrler-con">
          <div className="control-con">
            <h1 className="layout-h1">Layout</h1>
            <div className="checkboxes">
              <div className="checkbox-con">
                <input
                  type="checkbox"
                  id="showContent"
                  className="checkbox"
                  onChange={onChangeShowContent}
                  checked={showContent}
                />
                <label htmlFor="showContent" className="label">
                  Content
                </label>
              </div>
              <div className="checkbox-con">
                <input
                  type="checkbox"
                  id="leftNavbar"
                  className="checkbox"
                  onChange={onChangeLeftNavbar}
                  checked={showLeftNavbar}
                />
                <label htmlFor="leftNavbar" className="label">
                  Left Navbar
                </label>
              </div>
              <div className="checkbox-con">
                <input
                  type="checkbox"
                  id="RightNavbar"
                  onChange={onChangeRightNavbar}
                  checked={showRightNavbar}
                  className="checkbox"
                />
                <label htmlFor="RightNavbar" className="label">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
