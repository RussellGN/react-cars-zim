import { useState, createContext } from "react";
import listings from "./listings";
import displayPhoto from "./images/display-photo.jpg";
import accounts from "./accounts";

const UserContext = createContext({});

const UserContextProvider = (props) => {
	const [user, setUser] = useState(accounts[0]);

	return <UserContext.Provider value={{ user, setUser }} {...props}></UserContext.Provider>;
};

export { UserContext, UserContextProvider };
