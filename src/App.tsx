import type { MapViewState } from "@deck.gl/core";
import type { ReactNode } from "react";
import type { MapRef } from "react-map-gl/maplibre";
import { Box, Stats } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import { useRef } from "react";
import Map from "react-map-gl/maplibre";
import { Canvas } from "react-three-map/maplibre";
import { LineMaterial, LineSegments2, LineSegmentsGeometry } from "three-stdlib";
import { deckOverlay, heatmapLayer } from "./deckgl";

extend({ LineSegmentsGeometry, LineMaterial, LineSegments2 });

declare module "@react-three/fiber" {
  interface ThreeElements {
    lineSegmentsGeometry: ThreeElements["bufferGeometry"];
    lineMaterial: ThreeElements["material"] & Partial<LineMaterial>;
    lineSegments2: ThreeElements["object3D"] & { children?: ReactNode };
  }
}

const INITIAL_VIEW_STATE: MapViewState = {
  longitude: -1.415727,
  latitude: 52.232395,
  zoom: 6.6,
  minZoom: 5,
  maxZoom: 15,
  pitch: 40.5,
  bearing: -27,
};

function App() {
  const ref = useRef<HTMLDivElement>(null!);
  const mapRef = useRef<MapRef>(null!);

  function onLoad() {
    mapRef.current.getMap().addControl(deckOverlay);
    deckOverlay.setProps({
      layers: [
        heatmapLayer,
      ],
    });
  }
  return (
    <div className="h-screen w-screen relative overflow-hidden" ref={ref}>
      <Map
        ref={mapRef}
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"
        onLoad={onLoad}
      >
        <Stats className="stats" parent={ref} />
        <Canvas latitude={INITIAL_VIEW_STATE.latitude} longitude={INITIAL_VIEW_STATE.longitude} id="map-three">
          <hemisphereLight
            args={["#ffffff", "#60666C"]}
            position={[1, 4.5, 3]}
          />
          <object3D scale={15000} position={[0, 1000, 0]}>
            <Box position={[-1.2, 1, 0]} />
            <Box position={[1.2, 1, 0]} />
          </object3D>
        </Canvas>

      </Map>
    </div>
  );
}

export default App;
