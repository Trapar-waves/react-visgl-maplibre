import type { Color, PickingInfo } from "@deck.gl/core";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { AmbientLight, LightingEffect, PointLight } from "@deck.gl/core";
import { MapboxOverlay } from "@deck.gl/mapbox";
import { load } from "@loaders.gl/core";
import { CSVLoader } from "@loaders.gl/csv";

type DataPoint = [longitude: number, latitude: number];
export const colorRange: Color[] = [
  [1, 152, 189],
  [73, 227, 206],
  [216, 254, 181],
  [254, 237, 177],
  [254, 173, 84],
  [209, 55, 78],
];

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
});

const pointLight1 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-0.144528, 49.739968, 80000],
});

const pointLight2 = new PointLight({
  color: [255, 255, 255],
  intensity: 0.8,
  position: [-3.807751, 54.104682, 8000],
});
const lightingEffect = new LightingEffect({ ambientLight, pointLight1, pointLight2 });
function getTooltip({ object }: PickingInfo) {
  if (!object) {
    return null;
  }
  const lat = object.position[1];
  const lng = object.position[0];
  const count = object.count;

  return `\
    latitude: ${Number.isFinite(lat) ? lat.toFixed(6) : ""}
    longitude: ${Number.isFinite(lng) ? lng.toFixed(6) : ""}
    ${count} Accidents`;
}
const DATA_URL = "/heatmap-data.csv";
const data = load(DATA_URL, CSVLoader).then((res) => {
  const resData = res.data
    .map((d: any) => (Number.isFinite(d.lng) ? [d.lng, d.lat] : null))
    .filter(Boolean) as Array<[number, number]>;
  resData.push(...(Array.from({ length: 10000 }).map(() => [11.39085 + (Math.random() - 0.5), 47.27574 + (Math.random() - 0.5)]) as Array<[number, number]>));
  return resData;
});
export const heatmapLayer = new HexagonLayer<DataPoint>({
  id: "i-heatmap",
  colorRange,
  coverage: 1,
  data,
  elevationRange: [0, 3000],
  elevationScale: 50,
  extruded: true,
  getPosition: d => d,
  pickable: true,
  radius: 1000,
  upperPercentile: 100,
  material: {
    ambient: 0.64,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [51, 51, 51],
  },
  opacity: 0.1,
  transitions: {
    elevationScale: 3000,
  },
});
export const deckOverlay = new MapboxOverlay({
  interleaved: true,
  layers: [],
  effects: [lightingEffect],
  getTooltip,
});
