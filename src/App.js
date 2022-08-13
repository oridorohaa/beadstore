import "./categories.styles.scss";
import React, { useState } from "react";
import Directory from "./components/directory/directory.component";
const App = () => {
  const [page, setPage] = useState("home");
  const categories = [
    {
      id: 1,
      title: "Earings",
      imageUrl: "https://i.ibb.co/sHr2HtZ/blue-earrings.jpg",
    },
    {
      id: 2,
      title: "Necklaces",
      imageUrl: "https://i.ibb.co/7Y4ZCqN/beads-necklace.jpg",
    },
    {
      id: 3,
      title: "Rings",
      imageUrl:
        "https://i.ibb.co/mqZ3FBk/Screen-Shot-2022-08-13-at-1-47-24-PM.png",
    },
    {
      id: 4,
      title: "Anklets",
      imageUrl:
        "https://i.ibb.co/5j1BLpk/Screen-Shot-2022-08-13-at-1-54-02-PM.png",
    },
    {
      id: 5,
      title: "Other",
      imageUrl:
        "https://i.ibb.co/ThdR4NR/catrin-johnson-Ple-ATAp-Y2-Lk-unsplash.jpg",
    },
  ];
  console.log(page);

  if (page === "home") return <Directory categories={categories} />;
  else if (page === "Earings") {
    return (
      <div>
        earnings<div onClick={() => setPage("home")}>back</div>
      </div>
    );
  }
};
export default App;
