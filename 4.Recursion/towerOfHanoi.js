/*
Tower Of Hanoi

You have 3 pegs — **source**, **auxiliary**, and **destination** — and 
`n` disks on the source peg in decreasing size order. The goal is to 
move all disks to the destination peg with these rules:
    1. Move only one disk at a time.
    2. A disk can only be placed on top of a larger disk or on an empty peg.
    3. Use the auxiliary peg to help.

- Recursive idea:
    * Move `n-1` disks from **source** to **auxiliary** peg.
    * Move the largest disk (`nth` disk) from **source** to **destination**.
    * Move the `n-1` disks from **auxiliary** to **destination** peg.

*/

var towerOfHanoi = function (n, A, B, C) {
  if (n === 1) {
    console.log(`Move 1st disk from ${A} -> ${B}`);
    return;
  }

  towerOfHanoi(n - 1, A, C, B);
  console.log(`Move ${n}th disk from ${A} -> ${C}`);
  towerOfHanoi(n - 1, B, A, C);
};
console.log(towerOfHanoi(3, A, B, C));
