import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.161.0/three.module.js';

// setting up the three Scene
const scene = new THREE.Scene();

// object creation

// 1. cube geometry
const geometry = new THREE.BoxGeometry(
    1,1,1
);

// 2. material for the cube
const material = new THREE.MeshBasicMaterial({ 
    color: 0xff0000
});

// 3. cube
const mesh = new THREE.Mesh(geometry, material);


// another mesh
const newGeometry  = new THREE.BoxGeometry(
    1,1,1
);

const newMaterial = new THREE.MeshBasicMaterial({
    color: "violet",
});

const newMesh = new THREE.Mesh(newGeometry, newMaterial);

// creating the group
const Group = new THREE.Group();

// adding the mesh to the group
Group.add(mesh, newMesh);

// adding the cube to the scene
scene.add(Group);

// Helper function
// const AxesHelper = new THREE.AxesHelper(2);
// scene.add(AxesHelper);

// camera creation

const feild_of_view = 75;
const aspect_ratio = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

const camera = new THREE.PerspectiveCamera(
    feild_of_view,
    aspect_ratio,
    near,
    far
);

camera.position.z = 3;
// add the camera to the scene
scene.add(camera);

// taking the canvas
const canvas = document.getElementById("three_canvas"); 

// renderer creation
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(window.innerWidth, window.innerHeight);

const animate = () =>{
    // Transformation

    // position
    mesh.position.z += 0.011;
    mesh.position.y += 0.032;
    mesh.position.x += 0.059;

    // rotation
    mesh.rotation.x *= Math.PI / 2;
    mesh.rotation.y *= Math.PI / 4;
    mesh.rotation.z *= Math.PI / 4;

    // scale
    mesh.scale.x += 0.001;
    mesh.scale.y += 0.004;
    mesh.scale.z += 0.007;

    // Transformation

    // position
    newMesh.position.z += 0.005;
    newMesh.position.y += 0.008;
    newMesh.position.x += 0.003;

    // rotation
    newMesh.rotation.x *= Math.PI / 2;
    newMesh.rotation.y *= Math.PI / 4;
    newMesh.rotation.z *= Math.PI / 4;

    // scale
    newMesh.scale.x += 0.001;
    newMesh.scale.y += 0.004;
    newMesh.scale.z += 0.007;

    // render the scene
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

animate();


