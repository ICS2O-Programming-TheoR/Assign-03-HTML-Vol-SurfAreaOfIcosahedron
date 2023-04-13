// Copyright (c) 2023 Theo Rafuse All rights reserved
// Created by: Theo Rafuse
// Created on: April 2023
// This file contains the JS functions for index.html

function enterClicked() {
  let edge = parseFloat(document.getElementById('a-value').value);

  //This is the math for the volume
  let volume = (5 * (3 + Math.sqrt(5)) / 12) * edge ** 3
  let volumeRounded = volume.toFixed(2)

  //This is the math for the Surface Area
  let surfaceArea = 5 * Math.sqrt(3) * edge ** 2
  let surfaceAreaRounded = surfaceArea.toFixed(2)

  //This Result
  document.getElementById('volume-info').innerHTML = "The volume of the Icosahedron is " + (volumeRounded) + "cm<sup>3</sup>."
  document.getElementById('surface-area-info').innerHTML = "The surface area of the Icosahedron is " + (surfaceAreaRounded) + "cm<sup>2</sup>."

}