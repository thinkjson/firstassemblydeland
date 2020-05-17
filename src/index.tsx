import * as React from "react";
import { render } from "react-dom";
import { Social } from "./components/Social.component";
import { Live } from "./components/Live.component";
import "./images/bible_study.jpg";
import "./images/events/Good-Friday20-scaled.jpg";
import "./images/events/sunrise-service20.jpg";
import "./images/logo.png";
import "./images/megamen.jpg";
import "./images/morning.jpg";
import "./images/tower.jpg";
import "./images/waystogive.png";
import "./index.scss";
import "./staff";

document.querySelectorAll(".component-live").forEach(div => render(<Live />, div));
document.querySelectorAll(".component-social").forEach(div => render(<Social />, div));