import React from 'react';

//{this.props.texte}

class Texte extends React.Component {

	render() {

		return (	
          <div>   
		     <div><b>Module texte :</b></div>     
	         <div className="texte">{this.props.texte}</div>
             
			 <div><br /></div>
          </div>
			)
	}
}



export default Texte;