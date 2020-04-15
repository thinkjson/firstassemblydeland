import * as React from "react";
import { render } from "react-dom";
import { Live } from "./components/Live.component";

import "./index.scss";
import "./images/logo.png";
import "./images/promotions/promo1.jpg";
import "./images/promotions/promo2.jpg";
import "./images/promotions/promo3.jpg";
import "./images/events/Good-Friday20-scaled.jpg"
import "./images/events/sunrise-service20.jpg";
import "./images/tower.jpg"

document.querySelectorAll(".component-live").forEach(div => 
    render(<Live />, div));