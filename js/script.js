import SlideNav from "./slide.js";
import TabNav from "./tabnav.js";

const slide = new SlideNav(".slide", ".wrapper");
slide.init();

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabNav.init();

slide.addControl(".custom-controls");
