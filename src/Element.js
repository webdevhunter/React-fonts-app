import React, { Component } from 'react';
import './App.css';
// import Child from './Child'



class Element extends Component{
constructor(props){
super(props);
this.submit=this.submit.bind(this);
this.state={fonts:"Times New Roman",colors:"red",sizes:'70px',paragraphs:"Hey this is Krishna :)"}

}

submit(e){
e.preventDefault();
const {font,color,size,paragraph}=this.refs;
this.setState({fonts:font.value,colors:color.value,sizes:size.value,paragraphs:paragraph.value})
}



render(){
    var textStyle={
        fontFamily:this.state.fonts,
        color:this.state.colors,
        fontSize:this.state.sizes
    }
return(
<div>
<label>Input Font :</label>
<input type='text' ref="font" onChange={this.submit}/>
<label>Input Color :</label>
<input type='text' ref="color" onChange={this.submit}/>
<label>Input size :</label>
<input type='text' ref="size" onChange={this.submit}/>
<label>Paragraph :</label>
<input type='text' ref="paragraph" onChange={this.submit}/>

<h1>Given font: {this.state.fonts} color: {this.state.colors} state: {this.state.sizes}</h1>
<p style={textStyle}>{this.state.paragraphs}</p>
</div>
);
}
}

export default Element;
