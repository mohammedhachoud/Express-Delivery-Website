import React from "react";
import './style3.css'
/**
 * NOTES:
 * - On styling:
 * For this test I moved the styles to styles.css.
 * - On conditional rendering:
 * The conditional statement that checks whether or not to display an image
 * exists within the 'CardImage' function. Used in the component as:
 * <CardImage />
 * - On default props:
 * I have no idea whether this approach of handling defaults is the right/best one.
 * Next step would be to try variations on setting defaults.
 */

/*
1. Card Class
2. Defaults 
*/

// 1. Card Class /////////////////////////////////////////////
function CardImage(props) {
  const isImageURL = props.image;
  // If an image was passed:
  if (isImageURL) {
    return (
      <div >
        <img
        
          src={props.image}
          alt="Seattle"
        />
      </div>
    );
  }
  return null;
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.title}</p>

      <p className="styleDescription">{props.description}</p>
      <p className="styleDescription">{props.description1}</p>
    </div>
  );
}

export default class Card extends React.Component {
  render() {
    return (
      <div   style={{width: this.props.width + "px" }}>
        <div className="styleCard">
          <CardImage image={this.props.image} width={this.props.width} />
          <CardContent
            title={this.props.title}
            
       
            description={this.props.description}
            description1={this.props.description1}
          
          />
        </div>
      </div>
    );
  }
}

// 2. Defaults /////////////////////////////////////////////
Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",

  description: "Template description textbox",
  description1: "Template textbox",
 
  
};