# Typescript

```bash
yarn add nodemon typescript ts-node --dev


```

```json
{
    "compilerOptions": {
        "target": "es6", 
        "module": "commonjs",
        "sourceMap": true,
        "outDir": "./dist", 
        "strict": true,   
        "moduleResolution": "node",
        "esModuleInterop": true,
        "skipLibCheck": true, 
        "forceConsistentCasingInFileNames": true
    }
}

```

```json
{
    "watch": ["src"],
    "ext": "ts",
    "ignore": ["src/**/*.spec.ts"],
    "exec": "ts-node ./src/index.ts"
}

```