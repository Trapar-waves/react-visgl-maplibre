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
import { CommonSource } from "./source";

// eslint-disable-next-line unicorn/no-top-level-side-effects -- R3F extend must run before render
extend({ LineMaterial, LineSegments2, LineSegmentsGeometry });

declare module "@react-three/fiber" {
  interface ThreeElements {
    lineMaterial: Partial<LineMaterial> & ThreeElements["material"];
    lineSegments2: ThreeElements["object3D"] & { children?: ReactNode };
    lineSegmentsGeometry: ThreeElements["bufferGeometry"];
  }
}

const INITIAL_VIEW_STATE: MapViewState = {
  latitude: 47.27574,
  longitude: 11.39085,
  pitch: 70,
  zoom: 12,
};
const terrain = { exaggeration: 1.5, source: "terrain-dem" };

const HOMEPAGE = "https://github.com/Trapar-waves/react-visgl-maplibre";
const LOGOS_SET_URL = "https://icon-sets.iconify.design/logos/";

interface TechPill {
  iconClass: string;
  id: string;
  label: string;
}

const techStack: TechPill[] = [
  { iconClass: "icon-[logos--react]", id: "react", label: "React 19" },
  { iconClass: "icon-[logos--typescript-icon]", id: "ts", label: "TypeScript" },
  { iconClass: "icon-[logos--tailwindcss-icon]", id: "tailwind", label: "Tailwind 4" },
  { iconClass: "icon-[material-icon-theme--rstack]", id: "rsbuild", label: "Rsbuild" },
  { iconClass: "icon-[simple-icons--maplibre]", id: "maplibre", label: "MapLibre · react-map-gl" },
  { iconClass: "icon-[logos--markdown]", id: "deck", label: "Deck.gl" },
  { iconClass: "icon-[logos--markdown]", id: "loaders", label: "@loaders.gl" },
  { iconClass: "icon-[logos--threejs]", id: "three", label: "Three · R3F · drei" },
  { iconClass: "icon-[logos--markdown]", id: "rtmap", label: "react-three-map" },
  { iconClass: "icon-[logos--eslint]", id: "eslint", label: "ESLint" },
  { iconClass: "icon-[logos--pnpm]", id: "pnpm", label: "pnpm" },
  { iconClass: "icon-[logos--github-icon]", id: "github", label: "GitHub Actions" },
];

const readmeFeatures: string[] = [
  "MapLibre、Deck.gl 与 Three.js 同栈，服务高性能地理可视化。",
  "@react-three/fiber 与 react-three-map 将 3D 与地图视口对齐。",
  "Deck.gl 图层与光照等能力可扩展热力、聚合等场景。",
  "@loaders.gl 支持 CSV、3D Tiles 等格式加载。",
  "Rsbuild、Tailwind CSS 与 TypeScript 组成现代开发体验。",
  "ESLint 与 Husky 保障代码质量（见仓库配置）。",
  "GitHub Pages 下 BASE_PATH 与 404.html 支持 SPA 路由。",
];

const readmeTechNote = "README 写明 React v18+；当前 package.json 已对齐 React 19。Stats 组件仅作开发性能参考，发布前可移除。";
function App() {
  const divReference = useRef<HTMLDivElement>(null!);
  const mapReference = useRef<MapRef>(null!);

  function onLoad() {
    mapReference.current.getMap().addControl(deckOverlay);
    deckOverlay.setProps({
      layers: [
        heatmapLayer,
      ],
    });
  }
  return (
    <div className="h-screen w-screen relative overflow-hidden" ref={divReference}>
      <aside
        aria-label="图例与说明"
        className="pointer-events-none absolute right-4 top-4 z-10 max-w-sm"
      >
        <div className="pointer-events-auto max-h-[min(70vh,560px)] overflow-y-auto overscroll-contain rounded-xl border border-cyan-500/25 bg-slate-950/85 p-4 text-left text-sm text-slate-100 shadow-xl backdrop-blur-md">
          <p className="font-semibold text-cyan-200">react-visgl-maplibre</p>
          <p className="mt-2 leading-relaxed text-slate-300">
            Deck.gl 热力层 + MapLibre 地形；深蓝冷色数据风。热力颜色仅作密度提示，辅以文字说明。技术图标见
            {" "}
            <a
              className="font-medium text-cyan-300 underline decoration-cyan-700 underline-offset-2 hover:text-cyan-100"
              href={LOGOS_SET_URL}
              rel="noreferrer"
              target="_blank"
            >
              Iconify logos
            </a>
            。
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-slate-400">
            <li>高：暖色像素密度</li>
            <li>低：冷色背景</li>
          </ul>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
            技术栈
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {techStack.map(item => (
              <span
                className="inline-flex items-center gap-1.5 rounded-lg border border-cyan-500/20 bg-slate-900/80 px-2 py-1 text-xs text-slate-200"
                key={item.id}
              >
                <span aria-hidden className={`${item.iconClass} text-base text-cyan-300`} />
                {item.label}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs font-medium uppercase tracking-wide text-slate-500">
            README 摘要
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-slate-400">
            {readmeFeatures.map(line => (
              <li key={line}>{line}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs italic leading-relaxed text-slate-500">
            {readmeTechNote}
          </p>
          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            品牌图标来自
            {" "}
            <a className="text-cyan-400 underline hover:text-cyan-200" href={LOGOS_SET_URL} rel="noreferrer" target="_blank">SVG Logos</a>
            {" "}
            （CC0）。
          </p>
          <a
            className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-cyan-400/50 px-4 py-2 text-sm font-medium text-cyan-100 hover:border-cyan-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            href={HOMEPAGE}
            rel="noreferrer"
            target="_blank"
          >
            查看仓库
          </a>
        </div>
      </aside>
      <Map
        initialViewState={INITIAL_VIEW_STATE}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json"
        onLoad={onLoad}
        ref={mapReference}
        terrain={terrain}
      >
        <CommonSource />
        <Stats className="stats" parent={divReference} />
        <Canvas id="map-three" latitude={INITIAL_VIEW_STATE.latitude} longitude={INITIAL_VIEW_STATE.longitude}>
          <hemisphereLight
            args={["#ffffff", "#60666C"]}
            position={[1, 4.5, 3]}
          />
          <object3D position={[0, 1000, 0]} scale={15000}>
            <Box position={[-1.2, 1, 0]} />
            <Box position={[1.2, 1, 0]} />
          </object3D>
        </Canvas>

      </Map>
    </div>
  );
}

export default App;
