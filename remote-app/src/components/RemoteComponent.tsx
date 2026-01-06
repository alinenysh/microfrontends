
export interface CoolProps  {
  name: string;
  status: string;
  count: number;
}

export const RemoteComponent = (props: CoolProps) => {
  return (
    <>
      <h2>Hello {props.name}! Your status is {props.status}.</h2>
      <h2>Also the count is {props.count}</h2>
    </>
  )
}

export default RemoteComponent;