import { Typography } from "@material-tailwind/react";

function PatientData({
  IMC,
  clearence,
  weightAjustado,
  weightIdeal,
  weightFinal,
}) {
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
