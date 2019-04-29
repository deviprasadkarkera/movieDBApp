import React from 'react';
import './styleProgressBar.css';
class RadialProgress extends React.Component {
  constructor(props) {
     super(props);

     this.state = {
        percentage: 0,
     }
      this.addProgressBar= this.addProgressBar.bind(this);

};
addProgressBar = (percentage,color) => {
  var progressBarHtml = "";
	if (percentage !== undefined && percentage !== null && percentage !== 'null') {
		this.percentage = parseInt(percentage*10);
		var spanHtml = [];
		var colorCode=color;


		for (var i = -1; i <= 100; i++) {
			spanHtml.push(<span style={{color:colorCode}}>{percentage}</span>);
		}

		progressBarHtml = <div className='radial-progress radialProgressCircle' data-org={this.percentage} data-progress={this.percentage}>
			<div className='circle'>
			<div className='mask full'>
			<div className='fill' style={{backgroundColor:colorCode}}></div>
			</div>
			<div className='mask half'>
			<div className='fill'  style={{backgroundColor:colorCode}}></div>
			<div className='fill fix'></div>
			</div>
			<div className='shadow'></div>
			</div>
			<div className='inset'>
			<div className='percentage'>
			<div className='numbers'>{spanHtml}</div>
			</div>
			</div>
			</div>;
	}
	return progressBarHtml;
};
render() {
   return (
     <div className='radialProgress'>{this.addProgressBar(this.props.Perecentage.percent,this.props.Perecentage.color)}</div>
   )
 }
}
export default RadialProgress;
