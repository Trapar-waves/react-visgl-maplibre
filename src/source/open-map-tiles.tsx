import { Layer, Source } from "react-map-gl/maplibre";

const MAPTILER_KEY = import.meta.env.PUBLIC_MAPTILER_KEY;
const paint: any = {
  "fill-extrusion-color": [
    "interpolate",
    ["linear"],
    ["get", "render_height"],
    0,
    "lightgray",
    200,
    "royalblue",
    400,
    "lightblue",
  ],
  "fill-extrusion-height": [
    "interpolate",
    ["linear"],
    ["zoom"],
    15,
    0,
    16,
    ["get", "render_height"],
  ],
  "fill-extrusion-base": ["case", [">=", ["get", "zoom"], 16], ["get", "render_min_height"], 0],
};
export function OpenMapTiles() {
  return (
    <Source
      url={`https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`}
      type="vector"
    >
      <Layer
        id="3d-buildings"
        source="openmaptiles"
        source-layer="building"
        type="fill-extrusion"
        minzoom={15}
        filter={["!=", ["get", "hide_3d"], true]}
        paint={paint}
      />
    </Source>
  );
}
