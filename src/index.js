import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";


class jCube{
  constructor() {      
      this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
      this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );      
      this.cube = new THREE.Mesh(this.geometry, this.material );
      this.cube.translateX(Math.random()*5-2.5);
      this.cube.translateY(Math.random()*5-2.5);
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    this.camera.position.z = 5;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild(this.renderer.domElement );
    

    for (let index = 0; index < 10; index++) {      
      var c = new jCube();
      this.scene.add(c.cube);
    }

    this.draw();
  }

  draw = () => {
    requestAnimationFrame(this.draw);
    this.renderer.render( this.scene, this.camera );
  }

  render() {
    return (<div />);
  }

  
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);




// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import * as THREE from "three";
// class App extends Component {
//   componentDidMount() {
//     // === THREE.JS CODE START ===
//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     document.body.appendChild( renderer.domElement );
//     var geometry = new THREE.BoxGeometry( 1, 1, 1 );
//     var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
//     var cube = new THREE.Mesh( geometry, material );
//     scene.add( cube );
//     camera.position.z = 5;
//     var animate = function () {
//       requestAnimationFrame( animate );
//       cube.rotation.x += 0.01;
//       cube.rotation.y += 0.01;
//       renderer.render( scene, camera );
//     };
//     animate();
//     // === THREE.JS EXAMPLE CODE END ===
//   }
//   render() {
//     return (
//       <div />
//     )
//   }
// }
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);