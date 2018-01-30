import React from 'react';
import Button from 'react-button';

class Navigation extends React.Component {

/*static propTypes = {
	fonctiontexte: React.PropTypes.func.isRequired,
	fonctionphoto: React.PropTypes.func.isRequired,
	fonctionaudio: React.PropTypes.func.isRequired
}*/

state = {
	navig: "texte"
};	


	render() {

		return (
	    		<div className="navigation">

	    			<p className="flechegauche">O</p>
		    			<Button className="texte" onClick={this.props.fonctiontexte}>Texte</Button>

		    			<Button className="photo" onClick={this.props.fonctionphoto}>Photo</Button>

		    			<Button className="audio" onClick={this.props.fonctionaudio}>Audio</Button>
		    			
	    			<p className="flechedroite">O</p>
	    		</div>
			)
	}
}

export default Navigation;