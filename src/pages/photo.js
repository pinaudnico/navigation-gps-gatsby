import React from 'react'; //, { Component }

//import ReactDOM from 'react-dom';

import { withPrefix } from 'gatsby-link'

// module react image 
import Img from 'react-image-load';
import 'react-image-load/assets/style.css'

// import des images 
//import photo1 from '../images/photo1.jpg'
//import photo2 from '../images/photo2.jpg'

//{"./img/"+this.props.photo+".jpg"}
//src='${photo}'
//src={photo1}
//src={"./img/"+this.props.photo+".jpg"}

//<div className="photo">Photo du module</div>

/*console.log(this.props.photo)
let photoaffic=(this.props.photo)*/



/*import { withPrefix } from 'gatsby-link'

export default class Photo extends React.PureComponent {
  static propTypes = {
    imgFileName: PropTypes.string,
  }
  render() {
    return (
      <img
        src={withPrefix(`img/${this.props.imgFileName}`)}
        alt="some alt text"
      />
    )
  }
}*/

/*function getImageURI() {
	return "images/" + this.props.image;
  }


  {this.getImageURI()}
  */

class Photo extends React.Component {
	
	render() {
		//const photo = require('../images/photo2.jpg');
		
		//const address = require('path/to/photo1');
		
		return (
			
		<div>	
	        	
	        <div>
					<div><b>Module Photo</b></div>
					<div>N° de la photo : {this.props.photoNumber}</div>
					<div>Nom de la photo : {this.props.photoNom}</div>

					
					<Img
					  src={this.props.photoLink}
					  rotate={0}
					  width="300"
	        		/>
        	</div>  
        </div>  		
			)
	}
}



export default Photo;