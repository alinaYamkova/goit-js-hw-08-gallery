# goit-js-hw-08-gallery

{
  "files.autoSave": "onFocusChange",
  "explorer.confirmDelete": false,
  "[json]": {
   
       "editor.quickSuggestions": {
          "strings": true
      },
      "editor.suggest.insertMode": "replace"
  },
  "editor.tabSize": 2,
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "none",
  "breadcrumbs.enabled": false,
  // "workbench.colorTheme": "Kimbie dark",
  "window.zoomLevel": -1,
  "liveServer.settings.CustomBrowser": "chrome",
  "liveServer.settings.donotShowInfoMsg": true,
} 

{
  "arrowParens": "avoid",
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "insertPragma": false,
  "jsxBracketSameLine": false,
  "jsxSingleQuote": false,
  "printWidth": 80,
  "proseWrap": "never",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": false,
  "tabWidth": 2,
  "editor.tabsize": 2,
  "trailingComma": "all",
  "useTabs": true,
  "vueIndentScriptAndStyle": false,
  "singleAttributePerLine": false


 {
    "liveSassCompile.settings.formats": [
      {
        "format": "expanded",
        "extensionName": ".css",
        "savePath": "./css"
      },
      {
        "format": "compressed",
        "extensionName": ".min.css",
        "savePath": "./css"
      }
    ],
    "liveSassCompile.settings.excludeList": ["**/node_modules/**", ".vscode/**"],
    "liveSassCompile.settings.generateMap": true,
  
    "liveServer.settings.port": 1235
    // "liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"] 

  } 
}

"[jsonc]": {
  "editor.defaultFormatter": "esbenp.prettier-vscode"
} 
  


<!-- // const newGalleryCard = (importItms, idx) => {
  //   const liItemRef = document.createElement('li');
  //   liItemRef.classList.add("gallery__item");
    
  //   const aItemRef = document.createElement('a');
  //   aItemRef.classList.add("gallery__link");
  //   aItemRef.setAttribute('href', '${importItms.original}');
    
  //   const imgItemRef = document.createElement('img');
  //   imgItemRef.classList.add("gallery__image");
  //   imgItemRef.setAttribute('scr', importItm.preview);
  //   imgItemRef.setAttribute('data-source', '${importItms.original}');
  //   imgItemRef.setAttribute('alt', '${importItm.description}');
  //   console.log(imgItemRef);
  
  //   aItemRef.appendChild(imgItemRef);
  //   liItemRef.appendChild(aItemRef);
  //   return liItemRfe;
  // }
  // const createdGalleryList = importItms.map(newGalleryCard).join('');
  // imagListRef.append(...createdGalleryList );
  // // console.log(createdGalletyList); -->