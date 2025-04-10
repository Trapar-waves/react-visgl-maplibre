import { Layer, Source } from "react-map-gl/maplibre";

export function HillshadeDem() {
  return (
    <Source
      id="hillshade-dem"
      type="raster-dem"
      url="https://demotiles.maplibre.org/terrain-tiles/tiles.json"
      tileSize={256}
    >
      <Layer
        type="hillshade"
        layout={{ visibility: "visible" }}
        paint={{ "hillshade-shadow-color": "#473B24" }}
      />
    </Source>
  );
}
