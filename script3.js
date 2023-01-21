import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 2;



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );



// Object 1
const geometry = new THREE.SphereGeometry( 0.8, 35, 35 );
const texture = new THREE.TextureLoader().load( '/static/texture/2kmars.jpg' );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const sphere = new THREE.Mesh( geometry, material );
scene.add(sphere);




function animate() {
    sphere.rotation.y += 0.01;
	
	
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();