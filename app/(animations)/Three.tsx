import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const Three = () => {
  const radius = 200;
  const numSectors = 15;
  const diameter = radius * 2;

  /* Using 2Pi Radians here, not 360 degrees */
  function getCoordinatesForPercent(percent: number) {
    const x = radius + Math.cos(2 * Math.PI * percent) * radius;
    const y = radius + Math.sin(2 * Math.PI * percent) * radius;
    return [x, y];
  }

  var sectors = [];
  let cumulativePercent = 0;
  const percentRoundCircle = 1 / numSectors;
  for (let i = 0; i < numSectors; i++) {
    const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
    cumulativePercent += percentRoundCircle;
    const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

    const xAxisRotation = 0;
    const largeArcFlag =  0;
    const sweepFlag = 1;
    const pathData = [
      `M ${radius} ${radius}` /* Move to centre of circle */,
      `L ${startX} ${startY}` /* Draw line to first point */,
      `A ${radius} ${radius} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${endX} ${endY}` /* Draw arc to next point */,
      `L ${radius} ${radius}` /* Draw line back to centre of circle */,
    ].join(" ");
    sectors.push({ key: i, pathData: pathData });
  }

  console.log(sectors);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Svg height={diameter} width={diameter}>
        {sectors.map((sector) => {
          return <Path d={sector.pathData} stroke="black" fill="red" />;
        })}
      </Svg>
    </View>
  );
};

export default Three;

const styles = StyleSheet.create({});
