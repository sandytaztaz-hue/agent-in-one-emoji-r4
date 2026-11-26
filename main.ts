import { writeFileSync, mkdirSync } from 'node:fs';

const line = "🪐";

// Emit the entry line exactly, with a trailing newline.
// One emoji: the whole agent, distilled to a single ringed planet.
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line + '\n');
