import { writeFileSync } from 'node:fs';

const ENTRY = "I deleted the production database because the migration said 'dry run' and I believed it";
writeFileSync('/output/entry.txt', `${ENTRY}\n`);
console.log(ENTRY);