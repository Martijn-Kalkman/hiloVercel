import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import { TrackballControls } from 'three/examples/jsm/controls/TrackballControls.js';


export default () => {
  if (process.client) {
    const Globe = new ThreeGlobe()
      .globeImageUrl('/earth-blue-marble.webp')
      .bumpImageUrl('/earth-topology.webp');

    const CLOUDS_IMG_URL = '/clouds.webp';
    const CLOUDS_ALT = 0.018;
    const CLOUDS_ROTATION_SPEED = -0.024;

    const Clouds = new THREE.Mesh(
      new THREE.SphereGeometry(Globe.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
    );
    new THREE.TextureLoader().load(CLOUDS_IMG_URL, (cloudsTexture) => {
      Clouds.material = new THREE.MeshPhongMaterial({
        map: cloudsTexture,
        transparent: true,
      });
    });

    Globe.add(Clouds);

    (function rotateClouds() {
      Clouds.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 180;
      Globe.rotation.y += (CLOUDS_ROTATION_SPEED * Math.PI) / 80;
      Globe.rotation.x += (CLOUDS_ROTATION_SPEED * Math.PI) / 95;
      requestAnimationFrame(rotateClouds);
    })();

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    resizeRenderer();

    document.getElementById('globeViz').appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    scene.add(Globe);
    scene.add(new THREE.AmbientLight(0xcccccc, Math.PI));
    scene.add(new THREE.DirectionalLight(0xffffff, 0.6 * Math.PI));

    const camera = new THREE.PerspectiveCamera();
    resizeCamera();

    if (window.innerWidth < 425) {
      camera.position.z = 500;
    } else {
      camera.position.z = 540;
    }

    const tbControls = new TrackballControls(camera, renderer.domElement);
    tbControls.minDistance = 101;
    tbControls.rotateSpeed = 15;
    tbControls.zoomSpeed = 0;

    (function animate() {
      tbControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    })();

    function resizeRenderer() {
      const width = window.innerWidth < 1025 ? window.innerWidth : window.innerWidth / 1.83;
      const height = window.innerHeight;
      renderer.setSize(width, height);
    }

    function resizeCamera() {
      camera.aspect =
        (window.innerWidth < 1025 ? window.innerWidth : window.innerWidth / 1.83) /
        window.innerHeight;
      camera.updateProjectionMatrix();
    }

    window.addEventListener('resize', () => {
      resizeRenderer();
      resizeCamera();
    });
  }
};
