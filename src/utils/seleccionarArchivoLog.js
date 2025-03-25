import fs from "fs";
import path from "path";

export default function seleccionarArchivoLog(ruta, nombre, fallback, extension) {
  const rutaFisica = path.resolve(`public${ruta}/${nombre}.${extension}`);
  const rutaOriginal = `${ruta}/${nombre}.${extension}`;
  const rutaFallback = `${ruta}/${fallback}.${extension}`;
  
  const logs = [];
  
  logs.push("\n##################\n");

  logs.push("\n++++++++++++++++++");
  logs.push("__ruta:", ruta);
  logs.push("__nombre:", nombre);
  logs.push("__fallback:", fallback);
  logs.push("__extension:", extension);
  
  logs.push("\n++++++++++++++++++");
  logs.push("__rutaFisica:", rutaFisica);
  logs.push("__rutaOriginal:", rutaOriginal);
  logs.push("__rutaFallback:", rutaFallback);
  
  logs.push("\n++++++++++++++++++");
  logs.push("__existe rutaFisica?", fs.existsSync(rutaFisica));

  logs.push("\n******************\n");
  
  return logs;
}