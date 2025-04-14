import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
 const [openProductDetail, setOpenProductDetail] = useState(false);
 const [selectedProduct, setSelectedProduct] = useState();
 const [openCart,setOpenCart] = useState(false)




  // ######################################################################################################################################

  const contextValue = {
    openProductDetail, setOpenProductDetail,selectedProduct, setSelectedProduct,openCart,setOpenCart
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
