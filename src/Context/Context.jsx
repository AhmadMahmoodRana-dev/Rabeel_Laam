import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
 const [openProductDetail, setOpenProductDetail] = useState(true);
 const [selectedProduct, setSelectedProduct] = useState();




  // ######################################################################################################################################

  const contextValue = {
    openProductDetail, setOpenProductDetail,selectedProduct, setSelectedProduct
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
