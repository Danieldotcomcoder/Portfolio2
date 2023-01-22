// import * as THREE from 'three';

// const scene = new THREE.Scene();
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

// //Object 1
// const geometry = new THREE.SphereGeometry( 0.5,25,35 );
// const normalTexture = new THREE.TextureLoader().load('./main.jpg')
// const material = new THREE.MeshStandardMaterial({
//     map: normalTexture,
// })


// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)

// // Light 1
// const light = new THREE.PointLight( 0xff0000, 0.2);
// light.position.set( 1, 5, 5 );
// scene.add( light );

// const lightHelper = new THREE.PointLightHelper(light)
// scene.add(lightHelper)

// // camera 
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera.position.z = 10;


// // render scene with camera
// renderer.render(scene, camera);