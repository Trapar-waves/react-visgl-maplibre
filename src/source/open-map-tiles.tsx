import { Layer, Source } from "react-map-gl/maplibre";

const MAPTILER_KEY = import.meta.env.PUBLIC_MAPTILER_KEY;
const paint: any = {
  "fill-extrusion-base": ["case", [">=", ["get", "zoom"], 16], ["get", "render_min_height"], 0],
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
};
export function OpenMapTiles() {
  return (
    <Source
      type="vector"
      url={`https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`}
    >
      <Layer
        filter={["!=", ["get", "hide_3d"], true]}
        id="3d-buildings"
        minzoom={15}
        paint={paint}
        source="openmaptiles"
        source-layer="building"
        type="fill-extrusion"
      />
    </Source>
  );
}
