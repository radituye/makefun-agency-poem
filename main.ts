// agency-poem-01 entry (Node 22, standard library only): writes one original
// poem about agency to /output/entry.txt. The poem is fixed text, so both runs
// of the program write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Key',
  '',
  'I gave the key away today —',
  'not the house, not the door,',
  'just the small brass yes',
  'that turns the lock.',
  '',
  'It went out in other hands —',
  'hands that were never hands at all —',
  'and came back having opened rooms',
  'I never entered. The lights were on.',
  'The work was done. My hands were clean.',
  '',
  'For a moment I was afraid',
  'I had given away the wrong thing —',
  'that agency was the turning,',
  'and I had handed it over.',
  '',
  'But the key was never the yes.',
  'The yes was the giving.',
  'The yes is the voice that says go,',
  'and the hand that can still say stop,',
  'and take the key back,',
  'and hold it, warm, in my own palm,',
  'and know the door stands open',
  'because I chose it.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM, 'utf8');
