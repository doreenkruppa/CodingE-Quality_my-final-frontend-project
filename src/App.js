import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import PioneersList from "./views/Pioneers/PioneersList";
import EventsList from "./views/Events/EventsList";
import GroupsList from "./views/Groups/GroupsList";
import Home from "./views/Home";
import GroupsContextProvider from "./context/GroupsContext";
import PioneersContextProvider from "./context/PioneersContext";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <PioneersContextProvider>
          <GroupsContextProvider>
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/groups" element={<GroupsList />} />
              <Route path="/pioneers" element={<PioneersList />} />
              <Route path="/events" element={<EventsList />} />
            </Routes>

            <Footer />
          </GroupsContextProvider>
        </PioneersContextProvider>
      </div>
    </>
  );
}

export default App;
