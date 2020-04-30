import React from "react";

interface BugProps {
  name: string;
  price: number;
  time: number;
  timeOfYearNortherm: [];
  timeOfYearSouthern: [];
}

interface BugState {}

class Bug extends React.Component<BugProps, BugState> {}
export default Bug;
