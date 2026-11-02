type Props = {
  goToIndex: () => void;
  goToAdmin: () => void;
  goToMod: () => void;
};

export function PageHead({goToIndex, goToAdmin, goToMod}: Props) {
  return (
    <>
      <div>
        <button onClick={goToIndex}>Index</button>
        <button onClick={goToAdmin}>Admin</button>
        <button onClick={goToMod}>Mod</button>
      </div>
    </>
  )
}
