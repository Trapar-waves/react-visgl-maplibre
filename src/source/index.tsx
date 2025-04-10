import { HillshadeDem } from "./hillshade-dem";
import { OpenMapTiles } from "./open-map-tiles";
import { TerrainDem } from "./terrain-dem";

export function CommonSource() {
  return (
    <>
      <TerrainDem />
      <HillshadeDem />
      <OpenMapTiles />
    </>
  );
}
