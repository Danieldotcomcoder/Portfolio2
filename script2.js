import './style.css';
import * as THREE from 'three';


const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Object 1
const geometry = new THREE.SphereGeometry( 6,6,6 );
const normalTexture = new THREE.TextureLoader().load('./static/texture/2kmars.jpg')
const material = new THREE.MeshStandardMaterial({
    map: normalTexture,
})


const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)


// Light 1
const pointLight = new THREE.PointLight( 0xffffff, 2)
pointLight.position.set(-3,-1,-5)
scene.add(pointLight)


// camera 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 1;
// render scene with camera
renderer.render(scene, camera);