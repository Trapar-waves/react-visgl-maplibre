import { Layer, Source } from "react-map-gl/maplibre";

export function HillshadeDem() {
  return (
    <Source
      id="hillshade-dem"
      tileSize={256}
      type="raster-dem"
      url="https://demotiles.maplibre.org/terrain-tiles/tiles.json"
    >
      <Layer
        layout={{ visibility: "visible" }}
        paint={{ "hillshade-shadow-color": "#473B24" }}
        type="hillshade"
      />
    </Source>
  );
}
