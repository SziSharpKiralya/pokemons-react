type Props = {
  goToIndex: () => void;
  goToAdmin: () => void;
  goToMod: () => void;
};

export function PageHead(props: Props) {
  return (
    <>
      <div>
        <button onClick={props.goToIndex}>Index</button>
        <button onClick={props.goToAdmin}>Admin</button>
        <button onClick={props.goToMod}>Mod</button>
      </div>
    </>
  )
}
