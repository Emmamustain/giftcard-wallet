import React from "react";

import BarcodeScanner from "react-qr-barcode-scanner";
function BarCodeScanner({ setBarCode }) {
  return (
    <>
      <BarcodeScanner
        width={700}
        height={200}
        delay={500}
        onUpdate={(err, result) => {
          if (result) setBarCode(result.text);
          else {
            setBarCode("");
            console.error(err);
          }
        }}
      />
    </>
  );
}
export default BarCodeScanner;
