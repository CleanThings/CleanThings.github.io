import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'


const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xf2f2f2 );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight);
camera.position.set( 0, 2, 4);

const loader = new GLTFLoader();
loader.load('SmartThingsMotionSensor.glb', function(gltf) {scene.add(gltf.scene);})

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const light1 = new THREE.PointLight( 0xffffff, 50, 100 );
light1.position.set( 0, 8, 0 );
scene.add( light1 );

//bottom light
const light2 = new THREE.PointLight( 0xffffff, 60, 100 );
light2.position.set( 0, -8, 0 );
scene.add(light2);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const controls = new OrbitControls( camera, canvas );


function animate() {

	requestAnimationFrame(animate);

	renderer.render( scene, camera );

}

animate()