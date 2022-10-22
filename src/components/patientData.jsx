import { Typography } from "@material-tailwind/react";
import { backendString } from './backendConnection'
import { useState, useEffect } from "react";
import axios from "axios";

function PatientData() {
  const [clearence, setClearence] = useState("");
  const [IMC, setIMC] = useState("");
  const [weightIdeal, setWeightIdeal] = useState("");
  const [weightAjustado, setWeightAjustado] = useState("");
  const [weightFinal, setWeightFinal] = useState("");

  useEffect(() => {
    axios.get(`${backendString}/patient/primaryData`).then((res) => {
      setIMC(res.data.IMC);
      setClearence(res.data.clearence);
      setWeightAjustado(res.data.weightAjustado);
      setWeightFinal(res.data.weightFinal);
      setWeightIdeal(res.data.weightIdeal);
      console.log(res.data);
    });
  });
  return (
    <div className="w-full text-center">
      <Typography variant="h6" color="teal">
        IMC: <span className="text-[#455a64] font-light">{IMC}</span>
      </Typography>
      <Typography variant="h6" color="teal">
        Peso Ideal:{" "}
        <span className="text-[#455a64] font-light">{weightIdeal} kg</span>
      </Typography>
      <Typography variant="h6" color="teal">
        Peso Ajustado:{" "}
        <span className="text-[#455a64] font-light">{weightAjustado} kg</span>
      </Typography>
      <Typography variant="h6" color="teal">
        Peso Final:{" "}
        <span className="text-[#455a64] font-light">{weightFinal} kg</span>
      </Typography>
      <Typography variant="h6" color="teal">
        Clearence:{" "}
        <span className="text-[#455a64] font-light">{clearence} mL/min</span>
      </Typography>
    </div>
  );
}

export default PatientData;
