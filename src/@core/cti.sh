#!/bin/sh

npm run cti create './src/@seedwork/application' -- -i '*spec.ts' -b && 
npm run cti create './src/@seedwork/domain' -- -i '*spec.ts' -e 'tests' -b && 
npm run cti create './src/@seedwork/infra' -- -i '*spec.ts' -i 'migrator-cli.ts' -b && 

npm run cti create './src/person/application' -- -i '*spec.ts' -b && 
npm run cti create './src/person/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/person/infra' -- -i '*spec.ts' -b

npm run cti create './src/education/application' -- -i '*spec.ts' -b && 
npm run cti create './src/education/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/education/infra' -- -i '*spec.ts' -b
