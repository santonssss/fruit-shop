import React from "react";
import { Button } from "./button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Button variant="ghost" className="mb-6 group" onClick={() => navigate(-1)}>
      <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
      Back
    </Button>
  );
};

export default BackButton;
