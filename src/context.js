import React, { useState, useContext, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useCallback } from "react";

// API URL
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCockTails] = useState([]);

  //!RELOOK AT CALLBACK HOOK
  const fetchDrinks = useCallback(async () => {
    // Fetch the data from the API
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      //assign the data returned to drinks
      const { drinks } = data;
      //pass the drinks data into the if statement
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          //Destructure the items returned from the API, the names match the names in the API object
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
          return {
            //Rename the items to make it easier to use the data from the API
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        //Pass the cocktails to the state hook
        setCockTails(newCocktails);
      } else {
        setCockTails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  //! RELOOK AT USE OF CONTEXT
  return (
    <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
