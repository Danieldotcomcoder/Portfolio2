// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


// const scene = new THREE.Scene();

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// // const renderer = new THREE.WebGLRenderer({
// //   canvas: document.querySelector('.webgl'),
// // });

// // renderer.setPixelRatio(window.devicePixelRatio);
// // renderer.setSize(window.innerWidth, window.innerHeight);
// camera.position.setZ(30);
// camera.position.setX(-3);





// // const geometry = new THREE.TorusGeometry(10,3,16,100)
// // const material = new THREE.MeshStandardMaterial( {color: 0xFF6347} );
// // const torus = new THREE.Mesh(geometry, material)

// // scene.add(torus)


// // const pointLight = new THREE.PointLight(0xffffff)
// // pointLight.position.set(2,2,2)

// // // const ambientLight = new THREE.AmbientLight(0xffffff)

// // scene.add(pointLight)

// // const lightHelper = new THREE.PointLightHelper(pointLight)

// // scene.add(lightHelper)


// // const control = new OrbitControls(camera, renderer.domElement)


// // const addStar = () => {
// //     const geometry = new THREE.SphereGeometry(0.25, 24 , 24)
// //     const material = new THREE.MeshStandardMaterial( {color: 0xffffff} );
// //     const star = new THREE.Mesh(geometry, material)
// // const textureLoader = new THREE.TextureLoader()
// // const textureLoader2 = new THREE.TextureLoader()
// // const normalTexture = textureLoader.load('/texture/2k_mars.jpg')
// // const normalTexture2 = textureLoader2.load('/texture/2k_earth_daymap.jpg')
// // const normalTexture3 = textureLoader2.load('/texture/2k_sun.jpg')
// // }
// // // Debug

// // const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('.webgl')

// // // Scen
// // const scene = new THREE.Scene()

// // // //Objects

// //Object 1
// const geometry1 = new THREE.SphereBufferGeometry( .13, 30, 25 );
// const material1 = new THREE.MeshStandardMaterial()
// material.normalMap = normalTexture;
// const sphere = new THREE.Mesh(geometry1,material1)
// sphere.translateX(-1.3)
// scene.add(sphere)

// // //Object 2
// // const geometry2 = new THREE.SphereBufferGeometry( .13, 30, 35 );
// // const material2 = new THREE.MeshStandardMaterial()
// // material2.metalness = 0.8
// // material2.roughness = 0.8
// // material2.normalMap = normalTexture2;
// // const sphere2 = new THREE.Mesh(geometry2,material2)
// // sphere2.translateX(0.8)
// // scene.add(sphere2)

// // //Object 3
// // const geometry3 = new THREE.SphereBufferGeometry(.1 , 30, 35 )
// // const material3 = new THREE.MeshStandardMaterial()
// // material3.metalness = 0.2
// // material3.roughness = 0.2
// // material3.normalMap = normalTexture3
// // const sphere3 = new THREE.Mesh(geometry3,material3)
// // sphere3.translateY(0.8)

// // scene.add(sphere3)


// // //Object 4
// // const geometry4 = new THREE.SphereBufferGeometry(.4 , 30, 35 )
// // const material4 = new THREE.MeshStandardMaterial()
// // material4.metalness = 0.2
// // material4.roughness = 0.2
// // material4.normalMap = normalTexture3
// // const sphere4 = new THREE.Mesh(geometry4,material4)
// // scene.add(sphere4)

// // //Object 5
// // const geometry5 = new THREE.SphereBufferGeometry(.4 , 30, 35 )
// // const material5 = new THREE.MeshStandardMaterial()
// // material5.metalness = 0.2
// // material5.roughness = 0.2
// // material5.normalMap = normalTexture3
// // const sphere5 = new THREE.Mesh(geometry5,material5)
// // sphere5.translateZ(-10)
// // scene.add(sphere5)


// // // Lights

// //Light 1
// const pointLight = new THREE.PointLight( 0xff0000, 0.9 )
// pointLight.position.set(1.3,0,0.5)
// scene.add(pointLight)

// // //Light 2
// // const pointLight2 = new THREE.PointLight( 0x3ac6ff, 0.4 )
// // pointLight2.position.set(-0.5,0,-0.5)
// // scene.add(pointLight2)



// // /**
// //  * Camera
// //  */
// // // Base camera
// // const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// // scene.add(camera)


// // /**
// //  * Renderer
// //  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// renderer.render(scene, camera);

// // // // onMouseMovement
// // // // document.addEventListener('mousemove', onDocumentMousemove)


// // // // const spaceTexture = new THREE.TextureLoader().load('ss.jpg')
// // // // scene.background = spaceTexture


// // // // animate:

// // const animate = () =>
// // {
// //       targetX = mouseX * .001
// //       targetY = mouseY * .001
// //     // const elapsedTime = clock.getElapsedTime()

// //     // Update objects
// //     // sphere.rotation.y = 1.5 * elapsedTime
// //     // sphere2.rotation.y = 1.5 * elapsedTime
// //     // sphere3.rotation.y = 1.5 * elapsedTime
// //     // sphere4.rotation.y = 0.5 * elapsedTime
// //     sphere3.translateZ(0.005)

// //     sphere4.translateX(0.40)
// //     sphere5.translateZ(0.09)


// //     sphere.translateX(  .008 * (targetX - sphere.rotation.x))
// //     sphere2.translateX(  -0.008 * (targetX - sphere.rotation.x))
  

// //     // Render
// //     renderer.render(scene, camera)

// //     // Call tick again on the next frame
// //     window.requestAnimationFrame(animate)
// // }

// // animate()