import generateTxt from '@m00nbyte/generate-humanstxt';
import { RawSource } from 'webpack-sources';

export default class HumansTxtPlugin {
    constructor(options = {}) {
        this.options = Object.assign(
            {
                path: 'humans.txt'
            },
            options
        );
    }

    apply(compiler) {
        const plugin = { name: this.constructor.name };

        compiler.hooks.compilation.tap(plugin, (compilation) => {
            compilation.hooks.additionalAssets.tapPromise(plugin, () =>
                generateTxt(this.options)
                    .then((output) => {
                        const source = new RawSource(output);

                        if (compilation.emitAsset) {
                            compilation.emitAsset(this.options.path, source);
                        }

                        return output;
                    })
                    .catch((error) => {
                        compilation.errors.push(error);
                    })
            );
        });
    }
}
