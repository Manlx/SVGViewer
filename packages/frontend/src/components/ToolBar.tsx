import { useState } from "react";
import 
  styled 
from "styled-components";

const BurgerMenu = styled.div`
  position: fixed;
  top: 0.5rem;
  left: 0.5rem;
  aspect-ratio: 1/1;
  height: 50px;
  border-radius: 1rem;
  background-color: rgba(0, 101, 202, 0.9);
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 20rem;
  background-color: rgba(56,56,56,0.5);
`;

export const ToolBar: React.FC<React.PropsWithChildren> = ({
  children
}) => {

  const [collapsed, setCollapsed] = useState(true);

  if (collapsed) {

    return (

      <BurgerMenu 
        onClick={()=>{

          setCollapsed(!collapsed)
        }}/>
    );
  }

  return (
    
    <Menu onClick={()=>{

        setCollapsed(!collapsed)
      }}>
      {
        children
      }
    </Menu>
  );
}