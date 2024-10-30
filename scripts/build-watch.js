const esbuild = require("esbuild");

(async function main() {
    try {
        const ctx = await esbuild.context({
            entryPoints: ['src/index.ts'],
            bundle: true,
            outfile: 'dist/www',
            platform: "node",
            
        });
        await ctx.watch();
    } catch {
        process.exit(1);
    }
})();