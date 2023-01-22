import './style.css';
import * as THREE from 'three';


const scene = new THREE.Scene();
const loader = new THREE.TextureLoader().load( '/static/images/space.jpg' );
scene.background = loader;



const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 6;


const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('.webgl'),
});

renderer.setSize( window.innerWidth , window.innerHeight-4 );
renderer.setPixelRatio(window.devicePixelRatio);


// Object 1
const geometry = new THREE.SphereGeometry( 0.4, 35, 55 );
const texture = new THREE.TextureLoader().load( '/static/texture/2kmars.jpg' );
const material = new THREE.MeshBasicMaterial( { map: texture } );
const sphere = new THREE.Mesh( geometry, material );
sphere.translateX(-2)
scene.add(sphere);


// Object2
const geometry2 = new THREE.SphereGeometry( 0.4, 35, 55 );
const texture2 = new THREE.TextureLoader().load( '/static/texture/2k_sun.jpg' );
const material2 = new THREE.MeshBasicMaterial( { map: texture2 } );
const sphere2 = new THREE.Mesh( geometry2, material2 );
sphere2.translateX(0)
sphere2.translateZ(1)
scene.add(sphere2);

// Object3
const geometry3 = new THREE.SphereGeometry( 0.8, 35, 55 );
const texture3 = new THREE.TextureLoader().load( '/static/texture/8k_earth_daymap.jpg' );
const material3 = new THREE.MeshBasicMaterial( { map: texture3 } );
const sphere3 = new THREE.Mesh( geometry3, material3 );
sphere3.translateX(5)
sphere3.translateY(3)
sphere3.translateZ(0)
scene.add(sphere3);

// Object 4

const geometry4 = new THREE.SphereGeometry( 0.1,35, 55 );
const texture4 = new THREE.TextureLoader().load( '/static/texture/moon.jpg' );
const material4  = new THREE.MeshBasicMaterial( { map: texture4 } );
const sphere4 = new THREE.Mesh( geometry4, material4 );
sphere4.translateY(0)
sphere4.translateZ(4)
sphere4.translateX(-2)
scene.add(sphere4);

// Object 5
const geometry5 = new THREE.SphereGeometry( 0.6,35, 55 );
const texture5 = new THREE.TextureLoader().load( '/static/texture/Jupiter.jpg' );
const material5  = new THREE.MeshBasicMaterial( { map: texture5 } );
const sphere5 = new THREE.Mesh( geometry5, material5 );
sphere5.translateY(1.5)
sphere5.translateX(-5)

scene.add(sphere5);
function animate() {
    sphere.rotation.y += 0.01;
    sphere2.rotation.y += 0.01;
    sphere3.rotation.y += 0.02;
    sphere4.rotation.y += 0.02;
    sphere5.rotation.y += 0.03;
    
     
    sphere.translateZ(0.03)
    sphere.translateX(0.01)
    
    sphere4.translateZ(0.05)
    
    
    sphere5.translateY(-0.001)
    sphere5.translateZ(0.001)
    
    
    renderer.render( scene, camera );
	requestAnimationFrame( animate );
	
}
animate();