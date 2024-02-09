import HTMLWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import webpack from 'webpack';
import {buildPlugins} from "./config/build/buildPlugins";
import {buildLoaders} from "./config/build/buildLoaders";
import {buildResolvers} from "./config/build/buildResolvers";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildOptions, BuildPaths} from "./config/build/types/config";


// const config:webpack.Configuration =
// export default config
export default (env: BuildEnv) => {
    const BuildPaths : BuildPaths = {
        entry: path.resolve(__dirname, `src`, `index.tsx`),
        build: path.resolve(__dirname, `build`),
        html: path.resolve(__dirname, `public`, `index.html`),
        src: path.resolve(__dirname, 'src'),
    }
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const port = env.port || 5000;

    return buildWebpackConfig({
        mode,
        paths: BuildPaths,
        isDev,
        port,
    })
}


// export default config;
