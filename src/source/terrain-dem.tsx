import { Source } from "react-map-gl/maplibre";

export function TerrainDem() {
  return (
    <Source
      id="terrain-dem"
      type="raster-dem"
      url="https://demotiles.maplibre.org/terrain-tiles/tiles.json"
      tileSize={256}
    />
  );
}
