type IconDisplayProps = {
  svgName: string,
  bodyColor?: string,
  svgColor?: string,
  textColor?: string
}

export const IconDisplay: React.FC<IconDisplayProps> = ({
  svgName,
  bodyColor,
  svgColor,
  textColor
}) => {

  return (

    <div
      style={{
        height:"18rem",
        width: "12rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bodyColor || "#e5c3a2",
        borderRadius: "1rem",
        padding: "1rem"
      }}>
      <div
        style={{
          borderRadius: "1rem",
          backgroundColor: svgColor || "#88d7cf",
          width: "100%",
          height: "10rem",
          backgroundImage: `url(http://localhost:1337/svg/${svgName})`,
          backgroundSize: "100% 100%"
        }}>
      </div>    
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
          textWrap: "wrap",
          backgroundColor: textColor || "#0a556c",
          width: "100%",
          height: "5rem",
          margin: "0.5rem",
          padding: "1rem"
        }}>

        <p
          style={{
            textAlign: "center",
            backgroundColor: "transparent"
          }}>
          {svgName}
        </p>
      </div>
    </div>
  );
}