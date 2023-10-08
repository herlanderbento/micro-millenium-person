#!/bin/sh

npm run cti create './src/core/shared/application' -- -i '*spec.ts' -b && 
npm run cti create './src/core/shared/domain' -- -i '*spec.ts' -e 'tests' -b && 
npm run cti create './src/core/shared/infra' -- -i '*spec.ts' -i 'migrator-cli.ts' -b && 

npm run cti create './src/core/person/application' -- -i '*spec.ts' -b && 
npm run cti create './src/core/person/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/core/person/infra' -- -i '*spec.ts' -b
npm run cti create './src/fastity/person/controller' -- -i '*spec.ts' -b
npm run cti create './src/fastity/person/validation' -- -i '*spec.ts' -b

npm run cti create './src/core/education/application' -- -i '*spec.ts' -b && 
npm run cti create './src/core/education/domain' -- -i '*spec.ts' -b && 
npm run cti create './src/core/education/infra' -- -i '*spec.ts' -b
npm run cti create './src/fastity/education/controller' -- -i '*spec.ts' -b
npm run cti create './src/fastity/education/validation' -- -i '*spec.ts' -b

npm run cti create './src/fastity/api/routes' -- -i '*spec.ts' -b
npm run cti create './src/fastity/api/swagger' -- -i '*spec.ts' -b
