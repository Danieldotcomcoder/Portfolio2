import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'

// Loading 

const textureLoader = new THREE.TextureLoader()
const normalTexture = textureLoader.load('/texture/NormalMap.png')

// Debug

const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()


// Objects
const geometry = new THREE.SphereBufferGeometry( .3, 30, 25 );


// Materials

const material = new THREE.MeshStandardMaterial()
material.metalness = 0.8
material.roughness = 0.7

material.normalMap = normalTexture;

material.color = new THREE.Color(0xfffff)

// Mesh
const sphere = new THREE.Mesh(geometry,material)
scene.add(sphere)




// Lights
//Light 1
const pointLight = new THREE.PointLight(0xffffff, 0.4)
pointLight.position.x = 2
pointLight.position.y = 2
pointLight.position.z = 2
scene.add(pointLight)


// Light 2
const pointLight2 = new THREE.PointLight(0xff0000, 5)
pointLight2.position.set(-45,10,10)

scene.add(pointLight2)




/**
 * Sizes
 * Responsive
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})



/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))









// onMouseMovement
// document.addEventListener('mousemove', onDocumentMousemove)

// let mouseX = 0
// let mouseY = 0

// let targetX = 0
// let targetY = 0

// const windowHalfX = window.innerWidth / 2;
// const windowHalfY = window.innerHeight / 2;

// function onDocumentMousemove(event) {
//     mouseX = (event.clientX - windowHalfX)
//     mouseY = (event.clientY - windowHalfY)
// }
const clock = new THREE.Clock()






// animate:

const animate = () =>
{
    //   targetX = mouseX * .001
    //   targetY = mouseY * .001
    const elapsedTime = clock.getElapsedTime()

    // Update objects
    sphere.rotation.y = 1.5 * elapsedTime
    
    // sphere.rotation.y += .5 * (targetX - sphere.rotation.y)
    // sphere.rotation.x += .05 * (targetY - sphere.rotation.z)
    // sphere.rotation.z += - .05 * (targetY - sphere.rotation.x)
    // Update Orbital Controls
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(animate)
}

animate()