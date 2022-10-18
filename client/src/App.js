//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import NavBar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import { Card } from './components/Pages/Card';
import { Main } from './components/Pages/Main';
import { Cpu } from './components/Pages/Cpu';
import { HeatDissipations } from './components/Pages/HeatDissipations';
import { Ram } from './components/Pages/Ram';
import { Rom } from './components/Pages/Rom';
import { Psup } from './components/Pages/Psup';

import { AddCard } from './components/AddAccessories/Card';
import { AddCpu } from './components/AddAccessories/Cpu';
import { AddMain } from './components/AddAccessories/Main';
import { AddHeatDissipation } from './components/AddAccessories/HeatDissipation';
import { AddRam } from './components/AddAccessories/Ram';
import { AddRom } from './components/AddAccessories/Rom';
import { AddPsup } from './components/AddAccessories/Psup';


import { InfoCard } from './components/InfoAccessories/card';
import { InfoCpu } from './components/InfoAccessories/cpu';
import { InfoMain } from './components/InfoAccessories/main';
import { InfoHeatDissipation } from './components/InfoAccessories/heat_dissipation';
import { InfoPsup } from './components/InfoAccessories/psup';
import { InfoRam } from './components/InfoAccessories/ram';
import { InfoRom } from './components/InfoAccessories/rom';

function App() {

  const displaySetCard = useSelector(state => state.set.displayAddCard);
  const displayUpdateCard = useSelector(state => state.update.card.display);

  const displaySetCpu = useSelector(state => state.set.displayAddCpu);
  const displayUpdateCpu = useSelector(state => state.update.cpu.display);

  const displaySetMain = useSelector(state => state.set.displayAddMain);
  const displayUpdateMain = useSelector(state => state.update.main.display);

  const displaySetHeatDissipation = useSelector(state => state.set.displayAddHeatDissipation);
  const displayUpdateHeatDissipation = useSelector(state => state.update.heat_dissipation.display);

  const displaySetPsup = useSelector(state => state.set.displayAddPsup);
  const displayUpdatePsup = useSelector(state => state.update.psup.display);

  const displaySetRam = useSelector(state => state.set.displayAddRam);
  const displayUpdateram = useSelector(state => state.update.ram.display);

  const displaySetRom = useSelector(state => state.set.displayAddRom);
  const displayUpdateRom = useSelector(state => state.update.rom.display);

  const toggle = (displayUpdateCard || displayUpdateCpu || displayUpdateMain || displayUpdateHeatDissipation || displayUpdatePsup || displayUpdateram || displayUpdateRom) === true ? "none" : "block";

  return (
    <>
      {displaySetCard && <AddCard />}
      {displayUpdateCard && <InfoCard />}

      {displaySetCpu && <AddCpu />}
      {displayUpdateCpu && <InfoCpu />}

      {displaySetMain && <AddMain />}
      {displayUpdateMain && <InfoMain />}

      {displaySetHeatDissipation && <AddHeatDissipation />}
      {displayUpdateHeatDissipation && <InfoHeatDissipation />}

      {displaySetPsup && <AddPsup />}
      {displayUpdatePsup && <InfoPsup />}

      {displaySetRam && <AddRam />}
      {displayUpdateram && <InfoRam/>}

      {displaySetRom && <AddRom/>}
      {displayUpdateRom && <InfoRom/>}

      <div style={{ display: toggle }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/card" element={<Card />} />
          <Route path="/main" element={<Main />} />
          <Route path="/cpu" element={<Cpu />} />
          <Route path="/ram" element={<Ram />} />
          <Route path="/rom" element={<Rom />} />
          <Route path="/psup" element={<Psup />} />
          <Route path="/heat_dissipations" element={<HeatDissipations />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
