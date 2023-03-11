type SwithcProps = {
  title: string
}
export const Switch = ({ title }: SwithcProps) => {
  return(
    <label>
      {title && <span>{title}</span>}
      <input type="radio"/>
    </label>
  )
}