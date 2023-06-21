const Buttons = ({text,className,clickHandler,style})=>{
return(
   <button className={className} style={style} onClick={clickHandler}>{text}</button>
)
}
export default Buttons;