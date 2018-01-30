import React from 'react';
import Photo from './photo';
import Texte from './texte';
import Audio from './audio';




// texte={this.state.points.point1.texte}

//this.setState({ contenuaffichage: require('../img/photo1.jpg') });
// test qui fonctionne : {test=="photo" ? <div><Photo /></div>:'rien'}

class Fenetre extends React.Component {
		
		state = {
			contenu: ""
		};

		render() {

				const test = this.props.contenu;
				return (
					<div>
		
						<div>
					      {(() => {
					        switch (test) {
					          case "texte": return <Texte texte={this.props.descriptif}/>;
					          case "photo": return <Photo photoLink={this.props.photoLieu} photoNom={this.props.photoName} photoNumber={this.props.photoNum}/>;
					          case "audio": return <Audio />;
					        }
					      })()}
		    			</div>
		    			
	    			</div>
					) 
				}




}


export default Fenetre;