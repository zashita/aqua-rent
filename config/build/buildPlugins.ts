import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";
import {BuildOptions, BuildPaths} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BundleAnalyzerPlugin}  from 'webpack-bundle-analyzer'

export function buildPlugins({paths, isDev}: BuildOptions):webpack.WebpackPluginInstance[] {
    if (isDev){

    }
    return [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: `css/[name].[contenthash:8].css`,
            chunkFilename: `css/[name].[contenthash:8].css`
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin()
    ]
}
