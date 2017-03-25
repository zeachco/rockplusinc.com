// http://www.mathsisfun.com/metric-imperial-conversion-charts.html
import React from 'react';
import Quantity from 'quantities';

const Mesure = props => {
  if (!props.value) {
    return null;
  }
  const val = Math.random() * 300;
  const metric = Quantity(val, Quantity.CM);
  const imperial = metric.convertTo(Quantity.IN);
  return (
    <span style={{
      cursor: 'help'
    }} title={imperial.value.toFixed(0) + ' ' + imperial.units}>
      {metric.value.toFixed(1) + ' ' + metric.units}
    </span>
  );
};

const Mass = props => {
  if (!props.value) {
    return null;
  }
  const val = Math.random() * 300;
  const metric = Quantity(val, Quantity.KG);
  const imperial = metric.convertTo(Quantity.LB);
  return (
    <span style={{
      cursor: 'help'
    }} title={imperial.value.toFixed(0) + ' ' + imperial.units}>
      {metric.value.toFixed(1) + ' ' + metric.units}
    </span>
  );
};

module.exports = {
  Mesure,
  Mass
};