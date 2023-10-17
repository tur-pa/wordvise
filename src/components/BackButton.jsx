import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const naviagte = useNavigate();

  return (
    <div>
      <Button
        type="back"
        onClick={(e) => {
          e.preventDefault();
          naviagte(-1);
        }}
      >
        &larr; Back
      </Button>
    </div>
  );
}

export default BackButton;
