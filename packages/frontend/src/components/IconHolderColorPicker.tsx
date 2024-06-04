import styled from "styled-components";

type IconHolderColorPickerProps = {
  setColorArr: React.Dispatch<React.SetStateAction<string>>[],
  setColorDescriptionArr: string[],
  colorValues: string[]
};

const InputColor = styled.input.attrs({type: "color"})`
  --BorderRadius: 1.5rem;

  background-color: #123456;
  padding: 0;
  border: none;
  aspect-ratio: 1/1;
  width: var(--BorderRadius);
  height: var(--BorderRadius);

  border-radius: var(--BorderRadius);

  &::-webkit-color-swatch {
    border: none;
    border-radius: var(--BorderRadius);
    padding: 0;
  }

  &::-webkit-color-swatch-wrapper {
    border: none;
    border-radius: var(--BorderRadius);
    padding: 0;
  }
`

export const IconHolderColorPicker: React.FC<IconHolderColorPickerProps> = ({
  setColorArr,
  setColorDescriptionArr,
  colorValues
}) => {

  return setColorArr.map((setColor, index) => {

  return (
    <div
      style={{
        marginTop:"0.5rem",
        display:"flex",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor:"transparent"
      }}
      key={`Color-Input-${index}`}>

      <p
        style={{
          display: "inline-block",
          marginRight: "0.5rem",
          backgroundColor:"transparent"
        }}>
      { setColorDescriptionArr[index] || "Setting color for: "}
      </p>

      <InputColor                 
        value={colorValues[index]}
        type="color" 
        onClick={ (e) => {
          e.stopPropagation();
        }}
        onChange={(e)=> {

          e.stopPropagation();
          console.log(e)
          setColor(e.target.value)
        }}/>
    </div>
    );
  })
};