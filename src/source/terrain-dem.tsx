import { Source } from "react-map-gl/maplibre";

export function TerrainDem() {
  return (
    <Source
      id="terrain-dem"
      tileSize={256}
      type="raster-dem"
      url="https://demotiles.maplibre.org/terrain-tiles/tiles.json"
    />
  );
}
