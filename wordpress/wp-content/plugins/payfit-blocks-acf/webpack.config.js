const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { IgnorePlugin } = require('webpack');

module.exports = (env, argv) => {
  // Récupérer la liste des dossiers dans le répertoire blocks
  const blocksDir = path.resolve(__dirname, 'blocks');
  const blockFolders = fs
    .readdirSync(blocksDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // Configuration des entrées pour les fichiers .ts ou .tsx
  const entriesTS = {};
  blockFolders.forEach((folder) => {
    let filePath = `./blocks/${folder}/index.ts`;
    if (fs.existsSync(filePath)) {
      entriesTS[folder] = filePath;
    } else {
      filePath = `./blocks/${folder}/index.tsx`;
      if (fs.existsSync(filePath)) {
        entriesTS[folder] = filePath;
      }
    }
  });

  // Récupérer la liste des fichiers editor.scss pour chaque bloc
  const editorEntries = {};
  const styleEntries = {};

  blockFolders.forEach((folder) => {
    const editorPath = `./blocks/${folder}/editor.scss`;
    const frontPath = `./blocks/${folder}/index.scss`;
    if (fs.existsSync(editorPath)) {
      editorEntries[`${folder}-editor`] = editorPath;
    }
    if (fs.existsSync(frontPath)) {
      styleEntries[`${folder}-styles`] = frontPath;
    }
  });

  console.log('editorEntries', editorEntries);
  console.log('styleEntries', styleEntries);
  return {
    entry: {
      ...entriesTS,
      ...styleEntries,
      ...editorEntries,
      styles: './styles/index.scss',
    },
    // output: { path: path.resolve(__dirname, 'build') },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'build'),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      // Ignorer les chunks vides
      // new IgnorePlugin({
      //   checkResource(resource) {
      //     if (/^.*\.js$/.test(resource)) {
      //       const fileName = path.basename(resource, '.js');
      //       return !entriesTS[fileName] && !editorEntries[fileName];
      //     }
      //     return false;
      //   },
      // }),
    ],
    optimization: {
      minimize: true, // Activer la minimisation
      minimizer: [
        // Minimiser le JavaScript avec TerserPlugin
        new TerserPlugin(),
        // Minimiser le CSS avec CssMinimizerPlugin
        new CssMinimizerPlugin(),
      ],
    },
  };
};
