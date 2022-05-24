import { build } from 'esbuild';
import { globPlugin } from 'esbuild-plugin-glob';

const COMPONENT_PATH = 'components';

build({
  entryPoints: [`${COMPONENT_PATH}/*.jsx`],
  plugins: [globPlugin()],
  outdir: COMPONENT_PATH,
  minify: true,
}).catch(() => process.exit(1));
