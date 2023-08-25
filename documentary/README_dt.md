# Dokumentation des Vorgehens:

## 1. Planung

### 1.1 des Aussehens, Aufbau und Funktionen der SPA

- zuerst erstellte ich eine Zeichnung dazu, wie die SPA aussehen sollte: mit Header, Main, Footer, Navi, Sidebar, die durchgängig sichtbar sein sollten sowie den 3-5 views, die via Routes und Navi eingerichtet/erreicht werden sollten
- dort zeichnete ich zusätlich ein, welche Files, Komponenten und Views über Funktionen, Routes verbunden sind und zwischen welchen Importe via useContext ermöglicht werden sollen [Zeichnung der SPA](./Bild_Aufbau%20SPA.pdf)

### 1.2 Projekt-Ordner-Struktur planen

- als nächstes erstellte ich eine Skizze dazu, wie die Folder- und File-Struktur des Projekt-Ordners aussehen muss [Zeichnung der Folder- und File-Struktur des Projekt-Ordners](./Bild_Folder_File_Struktur.pdf.pdf),

## 2. die react-app erstellen

- in VS Code einen Projektordner "Women-in-programming-Project"-Ordner erstellen
- im Terminal in diesen Ordner gehend dort die React-App erstellen via:
- // npx create-react-app
- //npm start
- //npm run serve
- alle vorhandenen files außer App.Css, App.js, index.js löschen und ebenso ihre Importe in diese drei files
- erstellen eines src-Ordners, in dem sich die drei zentralen Ordner: context, components und views sowie App.cs, App.js, index.js befinden
- in index.js importe erstellen:
  //import React from "react";
  //import ReactDOM from "react-dom/client";
  //import "./index.css";
  //import App from "./App";
  //const root = ReactDOM.createRoot(document.getElementById("root"));
  //root.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
  );
- in App.js all default content löschen und erstellen:
  //import './App.css';
  //function App(){
  return(<div className="App">hello world</div>);
  }
  //export default App

## 3. Komponenten einfügen

1. im src-Folder -> Subfolder "components" drei Files anlegen: Footer.js, Header.js, Sidebar.js, die auf der SAP durchgängig sichtbar seien sollen,
   dafür: File anlegen, bei Komponenten immer erster Buchstabe im Namen mit Großbuchstaben, im File // rfc eingeben -> erstellt function;
2. in App.js alle Komponenten einfügen: via
   // import Header from "./components/Header" sowie
   //in function App nach: return (<div className...> <Header/>...</div)

## 4. verschiedene "Seiten" als Views anlegen und verlinken

### 4.1 Routes anlegen

- um die router-funktion zu nutzen, zuerst entsprechendes package installiert im Terminal via:
  // npm i react-router-dom (im package.json-file überprüfen, ob da)
- dann im index.js-file: 1.// import {BrowserRouter} from "react-router-dom"; 2.// in rooter.render(...) um <App/> herum ergänzen <BrowserRouter></BrowserRouter>
- dann in src-Folder subfolder views anlegen und dort files für die unterschiedlichen view-Seiten anlegen, die via Routes erreicht werden sollen (z.B. Home.js, EventList.js, PionierList.js etc...)
- dann in App.js-file: 1. oben:// import {Route, Routes} from "react-router-dom"; 2. in "function App (){ return(...)}" -> zwischen Header- und Footer-Komponente die Routes einfügen für jeweiligen views-file mit entsprechendem path verknüpfen, der im Browser hinter Standardadresse ergänzt werden muss, um dorthin zu gelangen, via: //
  <Routes>
  <Route path="/" element={<Home/>} />
  </Routes>
  und checken, ob on top von App.js entsprechende Importe der jeweiligen Files auftauchen, ansonsten händisch ergänzen: //import Home from "./views/Home";

### 4.2. Routes der Views mit Menü verlinken

-im File Header.js:

1. on top //import {NavLink} from "react-router-dom";
2. einfügen in der "function Header" hinter "return"
   <div className="nav-list">
   <NavLink className="nav-link" to="/"> home </NavLink>
   </div>

## 5. die einzelnen Views ausgestalten - ihre Inhalte, Funktionen und Layout

- im Ordner "src" -> "views" wurden drei Unterordner angelegt für jede einzelne Seite/View (events, pioneers, groups)
- in jedem einzelnen dieser View-Ordner wurden 3 files erstellt - list, card, form
- via List-files zeigen die jeweiligen Views/Seiten eine Übersicht verschiedener events, pioneers bzw. groups, alle in einem bestimmten Format, das im file "Cards" definiert wurde, und durch eine Form am Ende der List-Seite von User\*innen ergänzt werden kann => Form und Cards wurden im List-file in der "function GroupsList" als Komponenten importiert und eingebunden (nesting)://
<div className="groups-list-Container">
  <Sidebar />
  <div className="groups-cards-Container"> {groups && groups.map((item, i) => <GroupsCard group={item} key={i} />)}
  </div>
  <GroupsForm/>
</div>
- über die hier (via useContext) verfügbare variable "groups", ein Array, der alle einzelnen Gruppen enthält als objekte, wird hier via .map-array-method jede einzelne Gruppe (via item, i) adressiert und als Props in den File/Funktion GroupCard importiert:
- im GoupList-File://<div className="groups-cards-Container"> {groups && groups.map((item, i) => <GroupsCard group={item} key={i} />)}
- im GroupCard-File:// export default function GroupsCard({ group }) {...}
- für eine einheitliche Darstellung der einzelnen Gruppen wird in GroupCard die jeweilige group aus dem array als Object adressiert und seine spezifische Propertys aufgerufen/angezeigt:
- <div className="text">
        <h2>{group.name}</h2>
        <div>
          <span style={{ fontSize: "15px" }}>
            <b> Description:</b> {group.description}
          </span>
        </div>
