import pandas as pd
import sys
import webbrowser
import os
import re
import colors
import res.elements

elements = res.elements.elements
colors = colors.colors_bw_CAonly.colors

atom_pattern = re.compile(r'^(ATOM|HETATM)')

# check if there is a parameter given on start
if len(sys.argv) < 2:
    print("[ERROR] missing path to PDB")
    sys.exit()
else:
    print("[INFO] Source:", sys.argv[1])

    atom_lines = []

    with open(sys.argv[1], 'r') as f:
        lines = f.readlines()

    for line in lines:
        if atom_pattern.match(line):
            atom_type = line[12:16].strip()
            x_coord = float(line[31:38].strip())
            y_coord = float(line[39:46].strip())
            z_coord = float(line[47:54].strip())

            atom_lines.append((atom_type, x_coord, y_coord, z_coord))

    protein = pd.DataFrame(atom_lines)


    # generate xeogl data out of PDB ATOM position data, including axis
    f = open("data/data.js", "w")
    f.write("var Molecule = new xeogl.Group({\n")
    f.write("    id: \"molecule\",\n")
    f.write("    rotation: [0, 0, 0],\n")
    f.write("    position: [0, 0, 0],\n")
    f.write("    scale: [1, 1, 1],\n\n")
    f.write("    children: [\n")
    f.write("        new xeogl.Mesh({\n            geometry: x_obj_axis,\n            material: new xeogl.PhongMaterial({\n                emissive: [1,0,0],\n                diffuse: [1, 0.0, 0.0],\n                lineWidth: 10\n            })\n        }),\n\n")
    f.write("        new xeogl.Mesh({\n            geometry: y_obj_axis,\n            material: new xeogl.PhongMaterial({\n                emissive: [0,1,0],\n                diffuse: [0.0, 1, 0.0],\n                lineWidth: 10\n            })\n        }),\n\n")
    f.write("        new xeogl.Mesh({\n            geometry: z_obj_axis,\n            material: new xeogl.PhongMaterial({\n                emissive: [0,0,1],\n                diffuse: [0.0, 0.0, 1],\n                lineWidth: 10\n            })\n        }),\n\n")

    for i in range(len(protein)):
        f.write("        new xeogl.Mesh({\n            position: [" + str(protein.iloc[i, 1]) + "," + str(protein.iloc[i, 2]) + "," + str(protein.iloc[i, 3]) + "],\n            scale: [1, 1, 1],\n            rotation: [0, 0, 0],\n")
        f.write("            geometry: " + str(elements.get(protein.iloc[i, 0])) + ",\n")
        f.write("            material: new xeogl.LambertMaterial({\n                color: " + str(colors.get(protein.iloc[i, 0])) + "\n            })\n        }),\n\n")

    f.write("   ]\n")
    f.write("});\n")
    f.close()

# open the visualization in browser
url = "file://" + os.path.dirname(os.path.abspath(__file__)) + "/template/index.html"
webbrowser.open(url, new=2)
