import React from "react"
import './componentToPrint.css'

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      
      <div className="header_print">
        <h4 className="title">Teklik Services Informatiques</h4>
        <h6>Adresse: 14, 1e Ruelle Fourgerolle</h6>
        <h6>Telephone:(+509) 4874 - 3778</h6>
        <h6>Date: </h6>
      </div>
      
      {props.cart.map((item,index)=>
        <div key={index}>
          <div className="item_print">
            <h5>{item.amount}</h5>
            <h5>{item.name}</h5>
            <h6>{item.prix} gdes</h6>   
          </div>
        </div>
      )}

      <div className="total_print">
        <h6>Discount: 0 %</h6>
        <h6>Total: 300 gdes</h6>
      </div>

      <div className="signature_print">
        <div></div>
        <h6>Signature</h6>
      </div>
      <div></div>
    </div>
  );
});