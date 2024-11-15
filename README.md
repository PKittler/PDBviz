# PDBviz

PDBviz visualizes the molecule spatial structure provided by a PDB file. It outputs the interactive 3D model in a browser.

## Dependencies
The software makes use of xeogl, which is included in this repository. For this, your browser should support at least WebGL 1.

## Restriction
This tool reads a shortended PDB file in, this means, that only lines starting with ATOM or TER are included in the file. For future versions, this will be extended to the ability to read normal PDB files.

## Execution
Start PDBviz via command-line.

``
python pdbviz.py Absolut/Path/To/PDBfile
``

## Tests
This version was tested on Windows 11 Home (Build 22631.4460).