/* eslint-disable react/display-name */
// eslint-disable-next-line react-refresh/only-export-components
export default () => {
  const status = false
  return <h2 
    style={{
    color: status ? "#00ff9f" : "#f64348"
  }}
>Current status: {status ? "ON" : "OFF" }</h2>
}