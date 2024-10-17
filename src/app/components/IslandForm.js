"use client";

import Image from "next/image";
import { useState } from "react";

function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState();

  function saveName() {
    setName(event.target.value);
  }
  function savePhoneNum() {
    setPhoneNum(event.target.value);
  }
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <Image src={island.img} alt={island.name} width="300" height="300" />
      <h3>Book a trip to {island.name} island</h3>
      <form
        onSubmit={() => {
          if (
            confirm(
              `${name} (${phoneNum}) Are you sure you want to book ${island.name}?`
            )
          ) {
            ("Confirm");
          } else {
            ("Cancel");
          }
        }}
      >
        <input onChange={saveName} placeholder="Type Full Name" />
        <input
          onChange={savePhoneNum}
          type="tel"
          placeholder="Type Phone Number"
        />
        <button type="submit" className="book">
          Book for today!
        </button>
      </form>
    </div>
  );
}

export default IslandForm;
