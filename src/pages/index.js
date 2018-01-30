// react
import React from 'react';
import ReactDom from 'react-dom';

//components
import Navigation from './navigation'
import Fenetre from './fenetre'

//import gatsby-image
//import Img from 'gatsby-image'

// css
import'../style/index.css';


//import donnees gps
import {geolocated} from 'react-geolocated';

//<img src={this.props.data.allImageSharp.edges[0].node.sizes.src}/>
//<div>Ref de la photo1 :{this.props.data.allImageSharp.edges[0].node.sizes.src}</div>
//<div>Ref de la photo2 :{this.props.data.allImageSharp.edges[1].node.sizes.src}</div>

// (sort: {fields: [edges: index ]})


class App extends React.Component {
constructor (props) {  
	super(props)       
	this.state = {
		contenuaffichage: "",
		latitude: "latitude",
				
	}
}

//call back des fonctions d'affichage
fonctiontexte = () => {
    	this.setState({ contenuaffichage: "texte" });
    	};

fonctionphoto = () => {
    	this.setState({ contenuaffichage: "photo" });
		};

fonctionaudio = () => {
    	this.setState({ contenuaffichage: "audio" });
		};






render() {
		// initialise ici le point du circuit repéré
		 
		
		let a=1;
		let numdupoint=0;
		let tableauCoordonnees = [];

		// defini les variables de travail
		var latitude, longitude, latitudefichier, longitudefichier, latitudeGPS, longitudeGPS;

		//console.log (this.props.data.allImageSharp.edges[num].node.sizes.originalName);
		
		function roundup (val){
			return val = Math.round(val*100000)/100000;
		}

	
		
		function changeNum () {
			
				//arrondis coords gps
				//latitudeGPS=roundup(latitude);
				//longitudeGPS=roundup(longitude);

				//verifier pour chaque point si lat et long corresponde
				// si oui numpoint=num+1 sinon ?
				//envoyer infos dans les props

				//,	numdupoint=this.props.data.allTableaudespointsCsv.edges[numdupoint].node.field1

				// else this.forceUpdate() et num =num+1

			   //tableauCoordonnees[1].node.field2

			   /*<div>Coordonnées en mémoire du circuit</div>
			   <div>Latitude : {this.props.data.allTableaudespointsCsv.edges[numdupoint].node.field2}</div>
			   <div>Longitude : {this.props.data.allTableaudespointsCsv.edges[numdupoint].node.field3}</div>*/
			   

			   var i=0;
			   
			   for (i=0; i<tableauCoordonnees.length; i++) {

				
				//alert (tableauCoordonnees[i].node.field2+" "+latitudeGPS+" - "+tableauCoordonnees[i].node.field3+" "+longitudeGPS );

				if (latitudeGPS==tableauCoordonnees[i].node.field2 && longitudeGPS==tableauCoordonnees[i].node.field3){
									//alert ("N° "+tableauCoordonnees[i].node.field1);
									return tableauCoordonnees[i].node.field1;
									
								   }
						}			
			}
		

		return (
			
			!this.props.isGeolocationAvailable
			? <div>Your browser does not support Geolocation</div>
			: !this.props.isGeolocationEnabled
			  ? <div>Geolocation is not enabled</div>
			  : this.props.coords
				? <div>
						<div>
							<div>Coordonnées du téléphone</div>
							<div>latitude : {this.props.coords.latitude}</div>
							<div>longitude : {this.props.coords.longitude}</div>
							<div><br /></div>
							
								{/* Transférer les coords GPS réelles et gps du tableau dans des variables */}
								{latitudeGPS=this.props.coords.latitude,
								longitudeGPS=this.props.coords.longitude,

								tableauCoordonnees=this.props.data.allTableaudespointsCsv.edges, ""
								}

							 	{/* Vérifier si un point correspond dans le tableau */}	
								{/*{latitudeGPS}	{latitudefichier} */}	
	
								{/* pour i=1 à longueur du tableau */}	
								{/* je passe la valeur de i à la fonction ? */}
								{numdupoint=changeNum(), ""}

							 	<div>Vous êtes au point N° : {numdupoint}</div>	 

							 	{/* Envoyer les infos dans les props */}	
								<div><Fenetre contenu={this.state.contenuaffichage}
														descriptif={this.props.data.allTableaudespointsCsv.edges[1].node.field4}
														
														photoNum={numdupoint}
														photoName={this.props.data.allImageSharp.edges[1].node.sizes.originalName}
														photoLieu={this.props.data.allImageSharp.edges[1].node.sizes.src}
								/></div>

								<div><Navigation fonctiontexte={this.fonctiontexte}
												fonctionphoto={this.fonctionphoto} 
												fonctionaudio={this.fonctionaudio}/>
								</div>

						</div>
				</div>
				: <div>Getting the location data&hellip; </div>
			

				

			)
	}
}


export default geolocated({
	positionOptions: {
	  enableHighAccuracy: false,
	},
	userDecisionTimeout: 5000,
  })(App);


export const Query = graphql`
query AppQuery {
allTableaudespointsCsv {
  edges {
	node {
	  field1
	  field2
	  field3
	  field4
	  field5
	  field6
	}
  }
}

allImageSharp (sort: {fields: [id]}){
  edges {
    node {
      sizes {
        src
        originalImg
        originalName
      }
    }
  }
}





}
`





