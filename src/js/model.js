"use strict";

export const totalHairCuts = function () {
  const curDate = new Date();
  const openingDate = new Date("07/11/2001");
  const ms_Difference = curDate.getTime() - openingDate.getTime();
  const day_Difference = ms_Difference / (1000 * 60 * 60 * 24);
  return Math.round(day_Difference * 5);
};
