import "./styles.css";
const SnackBar = ({ message, variant = "neutral" }) => {
  const variantSymbols = {
    success: "✓",
    error: "✕",
    warn: "⚠️",
    neutral: "ℹ️",
  };
  return (
    <div className={`snackbar ${variant}`}>
      {variantSymbols[variant]} {message}
    </div>
  );
};
export default SnackBar;
