# problem statement

consider this tree:

```
$ tree _node_modules/
├── a
│   ├── index.js
│   └── package.json // 0.0.2
└── b
    ├── index.js
    ├── node_modules
    │   └── a
    │       ├── index.js
    │       └── package.json // 0.0.1
    └── package.json
```

now consider the package.json.  note that `b` is a `devDependency`. if `b` is a dev dep, `a@0.0.1` should also be a devDep.

snyk-resolve-deps reports a@0.0.1 as `prod`, even though `devDep` `b` imports it.

## reproduce

- clone
- do _not_ `npm install`. instead,
  - `npm install snyk-resolve-deps`
  - `cp -r _node_modules/* node_modules/`

this puts our dummy sim into node_modules for demonstration purposes

- run `node index.js`
