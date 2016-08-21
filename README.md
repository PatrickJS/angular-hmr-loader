# Angular 2 HMR Loader
Angular 2 HMR Webpack Loader by @AngularClass
```es6
        {
          test: /\.ts$/,
          loaders: [
            'awesome-typescript-loader',
            '@angularclass/conventions-loader',
            '@angularclass/hmr-loader'
          ],
          exclude: [/\.(spec|e2e|d)\.ts$/],
          include: [root('./src')]
        },
```
