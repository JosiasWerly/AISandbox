import React, { Component } from "react";
import * as THREE from "three";

class Test extends Component {
    constructor(props) {
        super(props);
        this.var = "myTest";
        //this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        //this.material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        //this.cube = new THREE.Mesh( geometry, material );
    }
    render() {
        return (<h1>test</h1>);
    }
}
export {Test};