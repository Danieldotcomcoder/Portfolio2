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
sphere.translateX(-1.3)
scene.add(sphere);


// Object2
const geometry2 = new THREE.SphereGeometry( 0.4, 35, 55 );
const texture2 = new THREE.TextureLoader().load( '/static/texture/2k_earth_daymap.jpg' );
const material2 = new THREE.MeshBasicMaterial( { map: texture2 } );
const sphere2 = new THREE.Mesh( geometry2, material2 );
sphere2.translateX(0)
scene.add(sphere2);



// Light 1
const pointLight = new THREE.PointLight( 0xff0000, 0.9 )
pointLight.position.set(1.3,0,0.5)
scene.add(pointLight)

const clock = new THREE.Clock();


function animate() {
    sphere.rotation.y += 0.01;
    sphere2.rotation.y += 0.03;
	const elapsedTime = clock.getElapsedTime()
    sphere.translateX(0.004 * elapsedTime)
    // //     sphere.translateX(  .008 * (targetX - sphere.rotation.x))

    renderer.render( scene, camera );
	requestAnimationFrame( animate );
	
}
animate();