// vite.config.ts
import react from "file:///D:/web/project-films/site-films/site-films/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { defineConfig } from "file:///D:/web/project-films/site-films/site-films/node_modules/vite/dist/node/index.js";
import { fileURLToPath } from "url";
import { createSvgIconsPlugin } from "file:///D:/web/project-films/site-films/site-films/node_modules/vite-plugin-svg-icons/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/web/project-films/site-films/site-films/vite.config.ts";
var svgIconsConfig = createSvgIconsPlugin({
  iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
  symbolId: "icon-[dir]-[name]",
  inject: "body-first",
  customDomId: "__svg__icons__dom__"
});
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgIconsConfig
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url)),
      "@hooks": fileURLToPath(new URL("./src/hooks", __vite_injected_original_import_meta_url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", __vite_injected_original_import_meta_url)),
      "@utils": fileURLToPath(new URL("./src/utils", __vite_injected_original_import_meta_url)),
      "@pages": fileURLToPath(new URL("./src/pages", __vite_injected_original_import_meta_url)),
      "@scss": fileURLToPath(new URL("./src/scss", __vite_injected_original_import_meta_url)),
      "@ui": fileURLToPath(new URL("./src/ui", __vite_injected_original_import_meta_url)),
      "@providers": fileURLToPath(new URL("./src/providers", __vite_injected_original_import_meta_url)),
      "@components": fileURLToPath(new URL("./src/components", __vite_injected_original_import_meta_url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @use './src/scss/_variables.scss' as *;
          `
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFx3ZWJcXFxccHJvamVjdC1maWxtc1xcXFxzaXRlLWZpbG1zXFxcXHNpdGUtZmlsbXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHdlYlxcXFxwcm9qZWN0LWZpbG1zXFxcXHNpdGUtZmlsbXNcXFxcc2l0ZS1maWxtc1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovd2ViL3Byb2plY3QtZmlsbXMvc2l0ZS1maWxtcy9zaXRlLWZpbG1zL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbnNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1zdmctaWNvbnMnXG5cbmNvbnN0IHN2Z0ljb25zQ29uZmlnID0gY3JlYXRlU3ZnSWNvbnNQbHVnaW4oe1xuICBpY29uRGlyczogW3BhdGgucmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2Fzc2V0cy9pY29ucycpXSxcbiAgc3ltYm9sSWQ6ICdpY29uLVtkaXJdLVtuYW1lXScsXG4gIGluamVjdDogJ2JvZHktZmlyc3QnLFxuICBjdXN0b21Eb21JZDogJ19fc3ZnX19pY29uc19fZG9tX18nLFxufSlcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHN2Z0ljb25zQ29uZmlnXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQGhvb2tzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9ob29rcycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0BsYXlvdXRzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9sYXlvdXRzJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAnQHV0aWxzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy91dGlscycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0BwYWdlcyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvcGFnZXMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAc2Nzcyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvc2NzcycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgJ0B1aSc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvdWknLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAcHJvdmlkZXJzJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYy9wcm92aWRlcnMnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgICdAY29tcG9uZW50cyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMvY29tcG9uZW50cycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgIH0sXG4gIH0sXG4gIGNzczoge1xuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgIHNjc3M6IHtcbiAgICAgICAgYWRkaXRpb25hbERhdGE6IGBcbiAgICAgICAgICAgIEB1c2UgJy4vc3JjL3Njc3MvX3ZhcmlhYmxlcy5zY3NzJyBhcyAqO1xuICAgICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVCxPQUFPLFdBQVc7QUFDNVUsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsNEJBQTRCO0FBSmdLLElBQU0sMkNBQTJDO0FBTXRQLElBQU0saUJBQWlCLHFCQUFxQjtBQUFBLEVBQzFDLFVBQVUsQ0FBQyxLQUFLLFFBQVEsUUFBUSxJQUFJLEdBQUcsa0JBQWtCLENBQUM7QUFBQSxFQUMxRCxVQUFVO0FBQUEsRUFDVixRQUFRO0FBQUEsRUFDUixhQUFhO0FBQ2YsQ0FBQztBQUdELElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxNQUNwRCxVQUFVLGNBQWMsSUFBSSxJQUFJLGVBQWUsd0NBQWUsQ0FBQztBQUFBLE1BQy9ELFlBQVksY0FBYyxJQUFJLElBQUksaUJBQWlCLHdDQUFlLENBQUM7QUFBQSxNQUNuRSxVQUFVLGNBQWMsSUFBSSxJQUFJLGVBQWUsd0NBQWUsQ0FBQztBQUFBLE1BQy9ELFVBQVUsY0FBYyxJQUFJLElBQUksZUFBZSx3Q0FBZSxDQUFDO0FBQUEsTUFDL0QsU0FBUyxjQUFjLElBQUksSUFBSSxjQUFjLHdDQUFlLENBQUM7QUFBQSxNQUM3RCxPQUFPLGNBQWMsSUFBSSxJQUFJLFlBQVksd0NBQWUsQ0FBQztBQUFBLE1BQ3pELGNBQWMsY0FBYyxJQUFJLElBQUksbUJBQW1CLHdDQUFlLENBQUM7QUFBQSxNQUN2RSxlQUFlLGNBQWMsSUFBSSxJQUFJLG9CQUFvQix3Q0FBZSxDQUFDO0FBQUEsSUFDM0U7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsTUFHbEI7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
