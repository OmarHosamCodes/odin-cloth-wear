import "./Drawer.module.css";

export default function Drawer(
  { open, onClose }: { open: boolean; onClose: () => void } = {
    open: false,
    onClose: () => {},
  }
) {
  return (
    <div className={`side-drawer ${open ? "open" : ""}`}>
      <button onClick={onClose}>Close Drawer</button>
      {/* Add your drawer content here */}
    </div>
  );
}
