import { IconDisplay } from "./IconDisplay"

type IconHolderProps = {
  svgs: string[]
  bodyColor?: string,
  svgColor?: string,
  textColor?: string,
  backgroundStyles?: React.CSSProperties
}

export const IconHolder: React.FC<IconHolderProps> = ({
  svgs,
  bodyColor,
  svgColor,
  textColor,
  backgroundStyles
}) => {

  return (
    <div
      style={{
        ...backgroundStyles,
        display: "flex",
        flexWrap:"wrap",
        gap:"2rem",
        alignItems:"center",
        justifyContent:"center",
      }}>
      {
        svgs.map((svg,index) => {

          return (
            <IconDisplay
              key={`svgDisplay-${index}`}
              bodyColor={bodyColor}
              svgColor={svgColor}
              textColor={textColor}
              svgName={svg}/>
          );
        })
      }
    </div>
  );
}