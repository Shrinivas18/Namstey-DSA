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