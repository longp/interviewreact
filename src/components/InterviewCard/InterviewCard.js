import React, { Component } from 'react';
import {Row, Col, CardPanel} from 'react-materialize'

class InterviewCard extends Component {
  render() {
	return (
	  <div>
		<Row>
			<Col s={2} m={2}>
			  <CardPanel className="teal lighten-4 black-text">
			      <span>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
			  </CardPanel>
			</Col>

		</Row>
	  </div>
	);
  }
}

export default InterviewCard
