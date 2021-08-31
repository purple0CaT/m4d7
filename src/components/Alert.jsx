import { Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
const CustomAlert = ({kind}) => {
    const [AlertType, setalertType] = useState({kind})

  return (
    <>
      {<Alert variant={AlertType} className="mt-2">
        {AlertType}
      </Alert>}
    </>
  );
};

export default CustomAlert