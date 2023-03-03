import { useState } from 'react';

type TabBarProps = {
  btnTitle1: string;
  btnTitle2: string;
  btnTitle3: string;
  tabTitle1: string;
  tabTitle2: string;
  tabTitle3: string;
  tabBarBgColor: string;
  tabBarActiveBtnBgColor: string;
  handleTabChange: () => void;
};
const TabBar = ({
  btnTitle1,
  btnTitle2,
  btnTitle3,
  tabTitle1,
  tabTitle2,
  tabTitle3,
  tabBarBgColor,
  tabBarActiveBtnBgColor,
  handleTabChange,
}: TabBarProps) => {
  const [isActiveBtn1, setIsActiveBtn1] = useState(false);
  const [isActiveBtn2, setIsActiveBtn2] = useState(false);
  const [isActiveBtn3, setIsActiveBtn3] = useState(false);
  const style = {
    display: 'flex',
    "flex-direction": 'row',
    backgroundColor: tabBarBgColor,
    padding: '0',
    margin: '0',
  };
  const tabBtnsStyle = {
    fontSize: '20px',
    margin: '1px',
    padding: '8px',
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
    borderBottom: 'none',
  };
  const tabBtnActiveStyle = {
    fontSize: '20px',
    margin: '1px',
    padding: '8px',
    cursor: 'pointer',
    border: 'none',
    background: `linear-gradient(180deg, transparent 50%, ${tabBarActiveBtnBgColor} 130%)`,
    borderBottom: `2px solid ${tabBarActiveBtnBgColor}`,
  };
  const tabShow = {
    display: 'block',
  };
  const tabHide = {
    display: 'none',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={style} onChange={handleTabChange}>
        <button
          onClick={() => {
            setIsActiveBtn1(true);
            setIsActiveBtn2(false);
            setIsActiveBtn3(false);
          }}
          style={isActiveBtn1 ? tabBtnActiveStyle : tabBtnsStyle}
        >
          {btnTitle1}
        </button>
        <button
          onClick={() => {
            setIsActiveBtn1(false);
            setIsActiveBtn2(true);
            setIsActiveBtn3(false);
          }}
          style={isActiveBtn2 ? tabBtnActiveStyle : tabBtnsStyle}
        >
          {btnTitle2}
        </button>
        <button
          onClick={() => {
            setIsActiveBtn1(false);
            setIsActiveBtn2(false);
            setIsActiveBtn3(true);
          }}
          style={isActiveBtn3 ? tabBtnActiveStyle : tabBtnsStyle}
        >
          {btnTitle3}
        </button>
      </div>

      <div>
        <div style={isActiveBtn1 ? tabShow : tabHide}>{tabTitle1}</div>
        <div style={isActiveBtn2 ? tabShow : tabHide}>{tabTitle2}</div>
        <div style={isActiveBtn3 ? tabShow : tabHide}>{tabTitle3}</div>
      </div>
    </div>
  );
};

export default TabBar;
